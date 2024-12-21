import { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'; // Sidebar Component
import RoutesPage from './Components/routes/routes'; // Routes Component
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router basename="/Mangement-system"> {/* Set base URL */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        
        {/* Content Section */}
        <div
          className={`flex-1 p-4 bg-gray-100 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'ml-64' : 'ml-0'
          } md:ml-64`}
        >
          {/* Main content with routing */}
          <RoutesPage /> {/* This component will handle routing */}
        </div>
      </div>
    </Router>
  );
}

export default App;
