// src/components/KPISection.tsx

type KPIProps = {
  readonly total: number;
  readonly open: number;
  readonly highSeverity: number;
};

export default function KPISection({ total, open, highSeverity }: KPIProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <h2 className="text-gray-600 text-sm">Total Incidents</h2>
        <p className="text-2xl font-bold text-blue-600">{total}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <h2 className="text-gray-600 text-sm">Open Incidents</h2>
        <p className="text-2xl font-bold text-yellow-600">{open}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <h2 className="text-gray-600 text-sm">High Severity</h2>
        <p className="text-2xl font-bold text-red-600">{highSeverity}</p>
      </div>
    </div>
  );
}
// This component displays key performance indicators (KPIs) for incidents.
// It shows the total number of incidents, the number of open incidents, and the number of high severity incidents.