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
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Extract ingredients and measurements
  const ingredients = Object.keys(recipe)
    .filter((key) => key.startsWith("strIngredient") && recipe[key])
    .map((key) => ({
      ingredient: recipe[key],
      measure: recipe[`strMeasure${key.slice(13)}`],
    }));

  return (
    <div className="container bg-white my-5 p-4 rounded">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h2 className="mb-3">{recipe.strMeal}</h2>
        <p className="text-muted">
          <strong>Category:</strong> {recipe.strCategory} |{" "}
          <strong>Area:</strong> {recipe.strArea}
        </p>
      </div>

      {/* Image and Ingredients */}
      <div className="row mb-5">
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="img-fluid rounded w-75"
          />
        </div>
        <div className="col-md-8">
          <h4 className="mb-3">Ingredients</h4>
          <ul className="list-group">
            {ingredients.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      {/* Instructions */}
      <div className="mb-4">
        <h4 className="mb-3">Instructions</h4>
        <p className="text-justify lh-2">{recipe.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
