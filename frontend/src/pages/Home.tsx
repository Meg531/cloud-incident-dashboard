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

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Cloud Incident Dashboard</h1>
      <KPISection total={total} open={open} highSeverity={highSeverity} />
      <IncidentTable incidents={incidents} />
    </div>
  );
}