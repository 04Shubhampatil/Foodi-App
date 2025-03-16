import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Cpu } from "lucide-react";
import {Link} from "react-router-dom"
export default function Dish() {
  const [FoodItems] = useState([
    // North Indian
    {
      id: 1,
      name: "Paneer Butter Masala",
      price: 250,
      Category: "North Indian",
      description: "Creamy cottage cheese curry with rich tomato gravy",
      image: "https://images.squarespace-cdn.com/content/v1/551841f8e4b0b6960904347e/1523396610120-Z8O0RRDCA7QE6OT23NND/SayNomaste_Paneer_Butter_Masala_Curry_indian_easy.jpg", // Add image URL
    },
    {
      id: 2,
      name: "Butter Chicken",
      price: 300,
      Category: "North Indian",
      description: "Tender chicken in a smooth, buttery tomato sauce",
      image: "https://www.onceuponachef.com/images/2021/12/20200914_SEGAL_JM0667-768x960.jpg", // Add image URL
    },
    {
      id: 3,
      name: "Dal Makhani",
      price: 180,
      Category: "North Indian",
      description: "Slow-cooked black lentils with cream and spices",
      image: "https://www.sharmispassions.com/wp-content/uploads/2012/05/dal-makhani7-500x500.jpg", // Add image URL
    },
    {
      id: 4,
      name: "Aloo Gobi",
      price: 150,
      Category: "North Indian",
      description: "Spiced potato and cauliflower dry curry",
      image: "https://i0.wp.com/raodyrecipes.com/wp-content/uploads/2022/02/fc45155b-808b-4025-b1d7-020cdb0063f0.jpg?fit=1460%2C1947&ssl=1", // Add image URL
    },
    // South Indian
    {
      id: 5,
      name: "Chicken Biryani",
      price: 150,
      Category: "South Indian",
      description: "Fragrant rice dish with spiced chicken",
      image: "https://static.vecteezy.com/system/resources/previews/040/703/949/non_2x/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg", // Add image URL
    },
    {
      id: 6,
      name: "Dosa",
      price: 120,
      Category: "South Indian",
      description: "Crispy rice and lentil crepe with sambar",
      image: "https://png.pngtree.com/background/20230612/original/pngtree-dosa-is-sitting-on-a-plate-and-sauce-picture-image_3176179.jpg", // Add image URL
    },
    {
      id: 7,
      name: "Idli",
      price: 80,
      Category: "South Indian",
      description: "Steamed rice cakes served with chutney",
      image: "https://media.istockphoto.com/id/638506124/photo/idli-with-coconut-chutney-and-sambhar.jpg?s=612x612&w=0&k=20&c=ze1ngBM0LY4w9aqWx_tGe2vTAr4uf36elveTDZ83fgw=", // Add image URL
    },
    {
      id: 8,
      name: "Vada",
      price: 100,
      Category: "South Indian",
      description: "Crispy lentil doughnuts with coconut chutney",
      image: "https://t3.ftcdn.net/jpg/09/61/48/10/360_F_961481050_gVTCSsZ506Ifi64zWfBQBobPWaxMF39X.jpg", // Add image URL
    },
    {
      id: 9,
      name: "Pongal",
      price: 140,
      Category: "South Indian",
      description: "Savory rice and lentil porridge with ghee",
      image: "https://t3.ftcdn.net/jpg/02/80/40/82/360_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg", // Add image URL
    },
    // Chinese
    {
      id: 10,
      name: "Fried Rice",
      price: 200,
      Category: "Chinese",
      description: "Stir-fried rice with mixed vegetables",
      image: "https://media.istockphoto.com/id/945606006/photo/chicken-fried-rice.jpg?s=612x612&w=0&k=20&c=n3p_r97vJlp013wlxD5WyDYviR0ADj6LiS5QKOYYQLY=", // Add image URL
    },
    {
      id: 11,
      name: "Hakka Noodles",
      price: 180,
      Category: "Chinese",
      description: "Spicy stir-fried noodles with vegetables",
      image: "https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773775.jpg", // Add image URL
    },
    {
      id: 12,
      name: "Manchurian",
      price: 220,
      Category: "Chinese",
      description: "Crispy vegetable balls in tangy sauce",
      image: "https://t4.ftcdn.net/jpg/03/24/56/73/360_F_324567329_VIPsg4s4kWkvqJviANcIgeYPG602kN56.jpg", // Add image URL
    },
    {
      id: 13,
      name: "Spring Rolls",
      price: 150,
      Category: "Chinese",
      description: "Crispy rolls filled with mixed vegetables",
      image: "https://img.freepik.com/free-photo/fried-spring-rolls-cutting-board_1150-17010.jpg?semt=ais_hybrid", // Add image URL
    },
  ]);

  const { categoryName } = useParams();

  // Filter food items based on the category
  const FilterItems = FoodItems.filter(
    (item) => item.Category === categoryName
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Dishes in <span className="text-orange-600">{categoryName}</span>{" "}
        Cuisine
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FilterItems.length > 0 ? (
          FilterItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              {/* Image Section */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-orange-600">
                  ₹ {item.price}
                </span>
                <div className="flex space-x-2">
                  <button className="text-gray-600 hover:text-orange-600">
                    <Heart size={20} />
                  </button>
                  <Link to={`/Recipe/${item.name}`} >
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 flex items-center space-x-2">
                    <Cpu size={20} /> {/* Robot icon */}
                    <span>Ask AI</span>
                  </button>
                    </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full">
            No dishes found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
