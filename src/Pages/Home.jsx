import React from "react";
import { ChefHat, BookOpen, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          Welcome to The Foodi
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover delicious recipes, explore our menu, and create your culinary
          masterpieces.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <ChefHat className="mx-auto text-orange-600 mb-4" size={48} />
          <h2 className="text-xl font-semibold mb-2">Explore Recipes</h2>
          <p className="text-gray-600">
            Browse through our collection of mouth-watering recipes
          </p>
        </div>
        


        <Link to="/main-menu">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <BookOpen className="mx-auto text-orange-600 mb-4" size={48} />
            <h2 className="text-xl font-semibold mb-2">Main Menu</h2>
            <p className="text-gray-600">
              Check out our curated selection of dishes
            </p>
          </div>
        </Link>

        <Link to="/coustom-dish">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <ShoppingCart className="mx-auto text-orange-600 mb-4" size={48} />
          <h2 className="text-xl font-semibold mb-2">Custom Orders</h2>
          <p className="text-gray-600">
            Create your own unique culinary experience
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
}
