using Microsoft.AspNetCore.Identity;

namespace API.Data;

public class RaceUser
{
    public int RaceId { get; set; }

    public required Race Race { get; set; }

    public required string UserId { get; set; }

    public required IdentityUser User { get; set; }
}
