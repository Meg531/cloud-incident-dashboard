export type Incident = {
id: number;
title: string;
severity: string;
dateCreated: string;
status: string;
};

type TableProps = {
incidents: Incident[];
};

export default function IncidentTable({ incidents }: TableProps) {
return (
<div className="overflow-x-auto bg-white rounded-lg shadow">
    <table className="min-w-full">
    <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
        <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Title</th>
            <th className="p-3">Severity</th>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
        </tr>
        </thead>
        <tbody>
        {incidents.map((incident) => (
            <tr key={incident.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{incident.id}</td>
              <td className="p-3">{incident.title}</td>
              <td className="p-3">{incident.severity}</td>
              <td className="p-3">{new Date(incident.dateCreated).toLocaleDateString()}</td>
              <td className="p-3">{incident.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}