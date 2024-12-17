import React, { useState } from "react";
import "./App.css";
import recipeLogo from "./assets/logo.webp";
import { searchRecipesByName } from "./services/recipeService";
import SearchBar from "./components/searchBar";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  // Function to handle the search and fetch recipes
  const handleSearch = async (query) => {
    setIsSearched(true);
    const result = await searchRecipesByName(query);
    setRecipes(result || []);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="bg-primary text-white py-5 text-center">
        <div className="container">
          <img
            src={recipeLogo}
            className="App-logo mb-3"
            alt="logo"
            style={{ maxWidth: "150px" }}
          />
          <h1 className="display-4">Recipe Finder</h1>
          <p className="lead">Find delicious recipes by ingredients or name</p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* Recipe Cards */}
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
                    </div>
                  </div>
                </div>
              ))
            : isSearched && (
                <p className="text-center mt-4">
                  No recipes found. Try searching for something!
                </p>
              )}
        </div>
      </div>
    </div>
  );
}

export default App;
