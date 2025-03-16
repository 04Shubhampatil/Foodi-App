import React from "react";
import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="relative w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://media.istockphoto.com/id/1799554397/vector/restaurant-with-fork-smile-concept.jpg?s=612x612&w=0&k=20&c=BCIHCBDZ8nfBALGRPFAfLVSv-DEETFon7MiUgZ-yoWc=" 
            alt="The Foodi Logo" 
            className="w-10 h-10 mr-3 rounded-full"
          />
          <div className="text-2xl font-bold text-orange-600 tracking-wider">
            The Foodi
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="flex items-center space-x-6">
          {/* Notifications */}
          <button className="relative text-gray-600 hover:text-orange-600 transition-colors">
            <Bell size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              3
            </span>
          </button>

          {/* User Account */}
          <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors">
            <User size={20} />
            <span className="text-sm font-medium">Account</span>
          </button>
        </nav>
      </div>
    </div>
  );
}