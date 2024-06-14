import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-lg mb-6" />

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-pastel-blue">Description</h3>
          <p className="text-gray-700">{recipe.description}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-pastel-blue">Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
              <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
              <p><strong>Servings:</strong> {recipe.servings}</p>
            </div>
            <div>
              <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
              <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
              <p><strong>Calories:</strong> {recipe.caloriesPerServing}</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-pastel-blue">Ingredients</h3>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-pastel-blue">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag, index) => (
              <span key={index} className="bg-pastel-green text-sm px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }, (_, idx) => (
            <svg
              key={idx}
              className={`w-6 h-6 ${
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
      </div>
    </div>
  );
};

export default RecipeDetails;
