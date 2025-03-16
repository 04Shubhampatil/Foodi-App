import React, { useState } from 'react';
import { Bot, ChefHat, Loader2, Utensils } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card"
import Askai from "../../src/Util/Askai";

export default function CustomDish() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setResult(null); // Clear previous result
    
    try {
      let ingredients = e.target[0].value;
      let type = e.target[1].value;
      let response = await Askai(`generate a ${type} recipe using ${ingredients}, in 200 Words`);
      setResult(response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8 space-x-3">
          <ChefHat className="w-10 h-10 text-orange-500" />
          <h1 className="text-4xl font-bold text-gray-800">Recipe Generator</h1>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-700">Create Your Custom Dish</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">
                  What ingredients do you have?
                </label>
                <input
                  type="text"
                  id="ingredients"
                  name="ingredients"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="e.g., chicken, rice, tomatoes"
                  disabled={isLoading}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">
                  What type of dish would you like?
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="e.g., stir-fry, pasta, soup"
                  disabled={isLoading}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Creating Recipe...</span>
                  </>
                ) : (
                  <>
                    <ChefHat className="w-5 h-5" />
                    <span>Generate Recipe</span>
                  </>
                )}
              </button>
            </form>
          </CardContent>
        </Card>

        {isLoading && (
          <Card className="mb-8 overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                  <Utensils className="w-12 h-12 text-orange-500 animate-spin" />
                  <div className="absolute top-0 left-0 w-full h-full animate-ping bg-orange-500 rounded-full opacity-20" />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-lg font-medium text-gray-700">Cooking up your recipe...</p>
                  <p className="text-sm text-gray-500">This might take a moment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {result && !isLoading && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-700 flex items-center space-x-2">
                <Bot className="w-6 h-6 text-orange-500" />
                <span>Your Custom Recipe</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-orange max-w-none">
                <p className="text-gray-600 leading-relaxed">{result}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}