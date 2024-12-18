import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/recipeService";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeById(id);
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-4">
      <h2>{recipe.strMeal}</h2>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="img-fluid mb-4"
      />
      <h4>Ingredients</h4>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.startsWith("strIngredient") && recipe[key])
          .map((key) => (
            <li key={key}>
              {recipe[key]} - {recipe[`strMeasure${key.slice(13)}`]}
            </li>
          ))}
      </ul>
      <h4>Instructions</h4>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetails;
