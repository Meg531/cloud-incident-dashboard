namespace CloudIncidentApi.Models
{
    public class Incident
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Severity { get; set; } = "Low";
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
// This class represents an incident with properties for ID, title, severity, and creation date.