import Home from './pages/Home';

function App() {
  // Placeholder for future auth logic
  const isAuthenticated = true;
  return isAuthenticated ? <Home /> : <div className="p-6">Please login to access the dashboard.</div>;
}

export default App;