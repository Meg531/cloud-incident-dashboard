using CloudIncidentApi.Models;

namespace CloudIncidentApi.Services
{
    public class IncidentService
    {
        private readonly List<Incident> _incidents = new();

        public List<Incident> GetAll() => _incidents;

        public Incident? GetById(int id) => _incidents.FirstOrDefault(i => i.Id == id);

        public void Add(Incident incident) => _incidents.Add(incident);
    }
}
// This service class manages a list of incidents, allowing retrieval by ID and adding new incidents.