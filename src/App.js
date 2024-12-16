import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-5">
        <h1>Recipe Finder</h1>
        <p className="lead">Find delicious recipes by ingredients or name</p>
      </header>

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for recipes..."
                value={query}
                onChange={handleSearchChange}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
