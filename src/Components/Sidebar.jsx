import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="bg-white h-full p-4 space-y-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Home size={20} className="mr-3" />
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/main-menu" 
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={20} className="mr-3" />
              Main Menu
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}