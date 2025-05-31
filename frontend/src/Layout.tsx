import React from "react";

type LayoutProps = {
  readonly children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-blue-800 text-center mb-2">
            ☁️ Cloud Incident Dashboard
          </h1>
          <nav className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Incidents</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Settings</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 flex justify-center">
        <div className="w-full max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}