const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Function to search recipes by name
export const searchRecipesByName = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search.php?s=${query}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
  }
};
