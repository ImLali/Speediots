namespace API.Services;

public class RaceDetailsDto
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public required string Description { get; set; }

    public byte Capacity { get; set; }

    public DateTime Date { get; set; }

    public required IEnumerable<RaceUsersDto> Participants { get; set; }
}
