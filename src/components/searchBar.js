import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setError("");
    } else {
      setError("Please enter a search term.");
    }
  };

  return (
    <div className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="btn btn-success"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {error && <p className="text-danger mt-2">{error}</p>}{" "}
    </div>
  );
}

export default SearchBar;
