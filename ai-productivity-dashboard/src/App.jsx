import React from 'react';
import Navbar from './components/Navbar';
import TaskList from './features/tasks/TaskList';
import AISuggestions from './features/ai/AISuggestions';
import WeatherWidget from './features/weather/WeatherWidget';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">AI Productivity Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <TaskList />
          </div>
          <div>
            <AISuggestions />
          </div>
          <div className="md:col-span-2">
            <WeatherWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
