using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Services;

public class RaceService(ApplicationDbContext db) : IRaceService
{
    public async Task<IList<RaceListDto>> GetAllRacesAsync()
    {
        return await db.Races.Select(r => new RaceListDto
        {
            Id = r.Id,
            Name = r.Name,
            Capacity = r.Capacity,
            ParticipantCount = r.RaceUsers.Count,
            Date = r.Date
        }).ToListAsync();
    }

    public async Task<RaceDetailsDto?> GetRaceByIdAsync(int id)
    {
        return await db.Races
            .Select(r => new RaceDetailsDto
            {
                Id = r.Id,
                Name = r.Name,
                Description = r.Description,
                Capacity = r.Capacity,
                Date = r.Date,
                Participants = r.RaceUsers.Select(ru => new RaceUsersDto
                {
                    UserId = ru.UserId,
                    Email = ru.User.Email
                })
            })
            .FirstOrDefaultAsync(r => r.Id == id);
    }

    public async Task CreateRaceAsync(RaceDetailsDto raceDto)
    {
        var newRace = new Race
        {
            Name = raceDto.Name,
            Description = raceDto.Description,
            Capacity = raceDto.Capacity,
            Date = raceDto.Date
        };

        db.Races.Add(newRace);
        await db.SaveChangesAsync();
    }

    public async Task UpdateRaceAsync(RaceDetailsDto raceDto)
    {
        await db.Races
            .Where(r => r.Id == raceDto.Id)
            .ExecuteUpdateAsync(r => r
                .SetProperty(r => r.Name, raceDto.Name)
                .SetProperty(r => r.Description, raceDto.Description)
                .SetProperty(r => r.Capacity, raceDto.Capacity)
                .SetProperty(r => r.Date, raceDto.Date));
    }

    public async Task DeleteRaceAsync(int id)
        => await db.Races.Where(r => r.Id == id).ExecuteDeleteAsync();

    public async Task RegisterToRace(string userId, int raceId)
    {
        var raceUser = new RaceUser
        {
            UserId = userId,
            RaceId = raceId
        };

        db.RaceUsers.Add(raceUser);
        await db.SaveChangesAsync();
    }

    public async Task UnRegisterToRace(string userId, int raceId)
    {
        await db.RaceUsers
            .Where(ru => ru.UserId == userId && ru.RaceId == raceId)
            .ExecuteDeleteAsync();
    }
}
