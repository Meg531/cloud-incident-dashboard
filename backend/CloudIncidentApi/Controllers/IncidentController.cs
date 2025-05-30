using Microsoft.AspNetCore.Mvc;
using CloudIncidentApi.Models;
using CloudIncidentApi.Services;

namespace CloudIncidentApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IncidentController : ControllerBase
    {
        private readonly IncidentService _service;

        public IncidentController(IncidentService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<Incident>> Get() => _service.GetAll();

        [HttpGet("{id}")]
        public ActionResult<Incident> Get(int id)
        {
            var incident = _service.GetById(id);
            if (incident == null) return NotFound();
            return incident;
        }

        [HttpPost]
        public IActionResult Create(Incident incident)
        {
            _service.Add(incident);
            return CreatedAtAction(nameof(Get), new { id = incident.Id }, incident);
        }
    }
}
// This controller handles HTTP requests for incidents, allowing retrieval of all incidents, a specific incident by ID, and creation of new incidents.