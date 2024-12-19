import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import recipeLogo from "./assets/logo.webp";
import { searchRecipesByName } from "./services/recipeService";
import SearchBar from "./components/searchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import FeaturedRecipes from "./components/FeaturedRecipes";

// Contact component
function Contact() {
  return (
    <div className="container my-4">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out!</p>
    </div>
  );
}

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
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src={recipeLogo}
                className="App-logo"
                alt="logo"
                style={{ maxWidth: "40px" }}
              />
              Recipe Finder
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="bg-primary text-white py-5 text-center">
          <div className="container">
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
            element={
              isSearched ? (
                <RecipeList recipes={recipes} isSearched={isSearched} />
              ) : (
                <FeaturedRecipes />
              )
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
