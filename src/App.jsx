import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import TaskManager from './components/TaskManager';
import Posts from './components/Posts';


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        {/* Navbar */}
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold">PLP Task Manager</h1>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Task Manager */}
          <div className="mb-8">
            <TaskManager />
          </div>

          {/* API Section */}
          <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">API Data</h2>
            <Posts />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
