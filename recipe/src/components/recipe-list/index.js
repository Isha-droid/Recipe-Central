import React from 'react';
import Link from 'next/link';

const RecipeList = ({ recipeList }) => {
  return (
    <div className="p-6 bg-pastel-light min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Recipe List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeList.map((recipe, index) => (
          <Link href={`recipe-list/${recipe.id}`} key={index}>
            <div className="border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white transform transition-transform duration-300 hover:scale-105">
              <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-pastel-blue">{recipe.name}</h3>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, idx) => (
                  <svg
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < Math.round(recipe.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.4 4.318a1 1 0 00.95.69h4.518c.969 0 1.371 1.24.588 1.81l-3.672 2.62a1 1 0 00-.364 1.118l1.4 4.318c.3.921-.755 1.688-1.54 1.118l-3.672-2.62a1 1 0 00-1.175 0l-3.672 2.62c-.784.57-1.84-.197-1.54-1.118l1.4-4.318a1 1 0 00-.364-1.118L2.075 9.745c-.783-.57-.38-1.81.588-1.81h4.518a1 1 0 00.95-.69l1.4-4.318z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">({recipe.reviewCount} reviews)</span>
              </div>
              <p className="text-gray-700 mb-4">{recipe.description}</p>
              <div className="flex justify-between items-center text-gray-600">
                <span className="bg-pastel-pink text-sm px-2 py-1 rounded-full">{recipe.cuisine}</span>
                <span className="bg-pastel-green text-sm px-2 py-1 rounded-full">{recipe.mealType.join(', ')}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
