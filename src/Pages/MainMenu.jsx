import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from 'lucide-react';

export default function MainMenu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [Data] = useState([
    {
      id: 1,
      Category: "North Indian",
      Img: "https://imgs.search.brave.com/AEB4ELnk4eK4zZI4gdOCY2xwRWUwRszhYPcUrntqgeo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vaHozZ211cXc2/L2ltYWdlL3VwbG9h/ZC9jX2ZpbGwscV8z/MCx3Xzc1MC9mX2F1/dG8vdGstdHJhZGl0/aW9uYWwtaW5kaWFu/LWZvb2RzLXRvLXRh/c3RlLWluLTIwMjIt/cGhwRVhBWE5T",
      Description: "Delicious and hearty dishes from North India.",
      tags: ["creamy", "spicy", "rich"]
    },
    {
      id: 2,
      Category: "South Indian",
      Img: "https://imgs.search.brave.com/TobuH5XBaldZ3-4JIxuXKIKGgRY-mPpNyLtmJfxFmBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vaHozZ211cXc2/L2ltYWdlL3VwbG9h/ZC9jX2ZpbGwscV8z/MCx3Xzc1MC9mX2F1/dG8vc291dGgtaW5k/aWFuLWZvb2QtcGhw/bEh0WUNG",
      Description: "Authentic and flavorful dishes from South India.",
      tags: ["crispy", "light", "coconut"]
    },
    {
      id: 3,
      Category: "Chinese",
      Img: "https://imgs.search.brave.com/kluCUNkQeM4BVS40MQzcM7uAAyuwLGqGVk-TfsQTk2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaGluZXNlLWZv/b2Qtbm9vZGxlcy1k/dW1wbGluZ3Mtc3Rp/ci1mcnktY2hpY2tl/bi1kaW0tc3VtLXNw/cmluZy1yb2xscy1j/aGluZXNlLWN1aXNp/bmUtc2V0LWJsYWNr/LWJhY2tncm91bmRf/ODk4MTYtMTQ5OTAu/anBnP3NlbXQ9YWlz/X2h5YnJpZA",
      Description: "Tasty and vibrant Chinese-inspired meals.",
      tags: ["stir-fry", "noodles", "spicy"]
    },
  ]);

  const Navigate = useNavigate();

  const filteredCategories = Data.filter(category => 
    category.Category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="mb-8 relative">
        <input 
          type="text" 
          placeholder="Search cuisines or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Our Menu Categories
      </h1>
      
      {filteredCategories.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => Navigate(`/dishess/${category.Category}`)}
              className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.Img}
                  alt={category.Category}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-orange-600 mb-2">
                  {category.Category}
                </h2>
                <p className="text-gray-600">{category.Description}</p>
                <div className="mt-2 flex space-x-2">
                  {category.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No cuisines found matching your search</p>
      )}
    </div>
  );
}