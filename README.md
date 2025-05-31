# Cloud Incident Dashboard

A full-stack application to monitor and manage cloud incidents. Built with:

- **Frontend**: React + TypeScript (Vite)
- **Backend**: .NET Web API
- **Architecture**: Monorepo-style project structure
├── frontend/           # React + Vite + TypeScript
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/            # .NET Web API
│   └── CloudIncidentApi/
│       ├── Controllers/
│       ├── Program.cs
│       └── launchSettings.json
│
├── README.md
└── .gitignore

Frontend:
React
Vite
TypeScript
Axios
TailwindCSS (optional styling)

Backend:
.NET 7 Web API
C#
Entity Framework (optional for DB)
RESTful endpoints

Dev Tools:
Visual Studio Code
Git & GitHub
Postman (for testing APIs)
Powershell / CLI

Getting Started

1. Clone the Repo

   ```bash
   git clone https://github.com/your-username/cloud-incident-dashboard.git
   cd cloud-incident-dashboard
   ```

2. Frontend Setup

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   Runs the frontend on: <http://localhost:5173>

3. Backend Setup

   ```bash
   cd backend/CloudIncidentApi
   dotnet restore
   dotnet run
   ```

   Runs the backend on: <http://localhost:5245>

Connecting Frontend to Backend

In frontend/vite.config.ts (or vite.config.js), add a proxy to forward API requests to your backend:

server: {
  proxy: {
    '/api': '<http://localhost:5245>'
  }
}
🔮 Planned Features
🔐 User authentication & login (OAuth with Azure AD)

🎯 Filter incidents by severity, type, or date

👥 Role-based access control (Admin, Viewer)

📣 Real-time alerts & notifications

💾 Persistent storage with SQL Server or Cosmos DB

📊 Responsive dashboard UI for visualizing incident metrics


