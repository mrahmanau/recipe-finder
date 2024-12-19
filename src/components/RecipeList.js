import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes, isSearched }) {
  return (
    <div className="container">
      <div className="row">
        {recipes.length > 0
          ? recipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="col-md-4 mb-4 d-flex justify-content-center"
              >
                <div
                  className="card"
                  style={{ width: "18rem", borderRadius: "10px" }}
                >
                  <img
                    src={recipe.strMealThumb}
                    className="card-img-top"
                    alt={recipe.strMeal}
                    style={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{recipe.strMeal}</h5>
                    <Link
                      to={`/recipe/${recipe.idMeal}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : isSearched && (
              <p className="text-center mt-4 text-danger">
                No recipes found. Try searching for something else!
              </p>
            )}
      </div>
    </div>
  );
}

export default RecipeList;
