import RecipeDetails from "@/components/recipe-details/page";
async function fetchRecipeDetail(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipe details');
  }
  const data = await res.json();
  return data;
}

export default async function RecipeDetailPage({ params }) {
  const recipe = await fetchRecipeDetail(params.details);

  return <RecipeDetails recipe={recipe} />;
}
