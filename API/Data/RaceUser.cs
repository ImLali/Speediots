using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

[PrimaryKey(nameof(RaceId), nameof(UserId))]
public class RaceUser
{
    public int RaceId { get; set; }

    public Race Race { get; set; }

    public required string UserId { get; set; }

    public IdentityUser User { get; set; }
}
