using API.Data;
using API.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthorizationBuilder()
  .AddPolicy("admin", policy => policy.RequireRole("Admin"));

var connectionString = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
  options.UseAzureSql(connectionString));

builder.Services.AddIdentityApiEndpoints<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = false)
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddAuthorization();

var allowSpecificOrigins = "_allowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(allowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("*")
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                      });
});

builder.Services.AddTransient<IRaceService, RaceService>();

var app = builder.Build();

app.UseCors(allowSpecificOrigins);

var accountEndpoints = app.MapGroup("Account");
accountEndpoints.MapIdentityApi<IdentityUser>();

var raceEndpoints = app.MapGroup("Race");
app.MapGet("list", async (IRaceService raceService) => await raceService.GetAllRacesAsync());

// Auto migration
using var scope = app.Services.CreateScope();
using var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
var migrations = await dbContext.Database.GetPendingMigrationsAsync();
if (migrations.Any())
    await dbContext.Database.MigrateAsync();

var roles = dbContext.Set<IdentityRole>();
if (!await roles.AnyAsync(role => role.Name == "Admin"))
{
    roles.Add(new IdentityRole { Name = "Admin", NormalizedName = "ADMIN" });

    await dbContext.SaveChangesAsync();
}

app.Run();

internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
