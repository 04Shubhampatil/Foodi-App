import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import MainMenu from "./Pages/MainMenu";
import Dish from "./Pages/Dish";
import Recipes from "./Pages/Recipes";
import CoustomDish from "./Pages/CoustomDish";



export default function App() {
  return (

    <div className="flex flex-col min-h-screen bg-gray-50">
      <BrowserRouter>
        {/* Navbar - Fixed at top, full width */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <Navbar />
        </nav>

        {/* Main content area with sidebar and page content */}
        <div className="flex flex-1 mt-16">
          {/* Sidebar - Fixed width on larger screens, hidden/toggleable on mobile */}
          <aside className="hidden md:block w-64 bg-white border-r p-4 overflow-y-auto">
            <Sidebar />
          </aside>

          {/* Page Content - Responsive width */}
          <main className="flex-1 p-4 md:p-6 lg:p-8 bg-gray-50 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main-menu" element={<MainMenu />} />
              <Route path="/dishess/:categoryName" element={<Dish />} />
              <Route path="/recipe/:DishName" element={<Recipes />} />
              <Route path="/coustom-dish/" element={<CoustomDish />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}