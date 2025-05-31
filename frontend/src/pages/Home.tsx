import React, { useEffect, useState } from 'react';
import KPISection from '../components/KPISection';
import IncidentTable from '../components/IncidentTable';
import type { Incident } from '../components/IncidentTable';
import { getOpenIncidents } from '../services/incidentApi';
import '../custom.css';

export default function Home() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [view, setView] = useState<'table' | 'cards'>('table');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const data = await getOpenIncidents();
        setIncidents(data as Incident[]);
      } catch (err) {
        console.error('Error fetching incidents:', err);
        setError('Failed to load incidents.');
      } finally {
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  const total = incidents.length;
  const open = incidents.filter(i => i.status.toLowerCase() === 'open').length;
  const highSeverity = incidents.filter(i => i.severity.toLowerCase() === 'high').length;

  const filteredIncidents =
    filter === 'all'
      ? incidents
      : incidents.filter(i => i.severity.toLowerCase() === filter);

  if (loading) {
    return <div className="p-6 text-center">Loading incidents...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="dashboard-header w-full flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold">Cloud Incident Dashboard</h1>
      </header>

      <div className="w-full max-w-5xl flex flex-col items-center">
        <KPISection total={total} open={open} highSeverity={highSeverity} />

        <div className="incident-card bg-white p-4 rounded shadow w-full max-w-3xl flex flex-col sm:flex-row gap-4 items-center justify-between my-4">
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="all">All Severities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <button
            onClick={() => setView(view === 'table' ? 'cards' : 'table')}
            className="p-2 bg-blue-500 text-white rounded shadow"
          >
            Toggle to {view === 'table' ? 'Cards' : 'Table'} View
          </button>
        </div>

        {view === 'table' ? (
          <IncidentTable incidents={filteredIncidents} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {filteredIncidents.map((incident) => (
              <div key={incident.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-bold text-lg mb-2">{incident.title}</h3>
                <p><strong>Severity:</strong> {incident.severity}</p>
                <p><strong>Status:</strong> {incident.status}</p>
                <p><strong>Date:</strong> {new Date(incident.dateCreated).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
