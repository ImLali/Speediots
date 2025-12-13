namespace API.Services;

public class RaceListDto
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public byte Capacity { get; set; }

    public int ParticipantCount { get; set; }

    public DateTime Date { get; set; }
}
