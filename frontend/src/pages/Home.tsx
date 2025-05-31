import React, { useEffect, useState } from 'react';
import KPISection from '../components/KPISection';
import IncidentTable from '../components/IncidentTable';
import type { Incident } from '../components/IncidentTable';
import { getIncidents } from '../services/incidentApi';

export default function Home() {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    getIncidents().then(data => setIncidents(data as Incident[]));
  }, []);

  const total = incidents.length;
  const open = incidents.filter(i => i.status.toLowerCase() === 'open').length;
  const highSeverity = incidents.filter(i => i.severity.toLowerCase() === 'high').length;

  const [filter, setFilter] = useState<string>('all');
  const [view, setView] = useState<'table' | 'cards'>('table');

  const filteredIncidents = filter === 'all'
    ? incidents
    : incidents.filter(i => i.severity.toLowerCase() === filter);

 return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Cloud Incident Dashboard</h1>

      <KPISection total={total} open={open} highSeverity={highSeverity} />

      <div className="mb-4 flex justify-between items-center">
        <select
          onChange={(e) => setFilter(e.target.value)}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIncidents.map(incident => (
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
  );
}