
namespace API.Services
{
    public interface IRaceService
    {
        Task CreateRaceAsync(RaceDetailsDto raceDto);
        Task DeleteRaceAsync(int id);
        Task<IList<RaceListDto>> GetAllRacesAsync();
        Task<RaceDetailsDto?> GetRaceByIdAsync(int id);
        Task RegisterToRace(string userId, int raceId);
        Task UnRegisterToRace(string userId, int raceId);
        Task UpdateRaceAsync(RaceDetailsDto raceDto);
    }
}