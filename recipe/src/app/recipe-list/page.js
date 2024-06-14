import RecipeList from '@/components/recipe-list'
import React from 'react'

async function fetchListOfRecipes(){
    try {
        const apiResponse = await fetch("https://dummyjson.com/recipes");
        const data= await apiResponse.json();
        return data?.recipes;
        
    } catch (e) {
        throw new Error(e)
        
    }
}
const recipes = async () => {
    const recipeList= await fetchListOfRecipes();

  return (
    <div>
      <RecipeList recipeList={recipeList}/>
    </div>
  )
}

export default recipes
