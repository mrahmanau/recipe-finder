import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import recipeLogo from "./assets/logo.webp";
import { searchRecipesByName } from "./services/recipeService";
import SearchBar from "./components/searchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = async (query) => {
    setIsSearched(true);
    const result = await searchRecipesByName(query);
    setRecipes(result || []);
  };

  return (
    <Router>
      <div className="App">
        <header className="bg-primary text-white py-5 text-center">
          <div className="container">
            <img
              src={recipeLogo}
              className="App-logo mb-3"
              alt="logo"
              style={{ maxWidth: "150px" }}
            />
            <h1 className="display-4">Recipe Finder</h1>
            <p className="lead">
              Find delicious recipes by ingredients or name
            </p>
          </div>
        </header>

        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={<RecipeList recipes={recipes} isSearched={isSearched} />}
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
