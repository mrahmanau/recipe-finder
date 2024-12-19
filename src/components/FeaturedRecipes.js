// src/components/FeaturedRecipes.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const featuredRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    description:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    description:
      "Chunks of grilled chicken enveloped in a creamy, spiced curry sauce.",
  },
  {
    id: 3,
    title: "Beef Wellington",
    image: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
    description:
      "A savory fillet steak coated with pâté and duxelles, wrapped in puff pastry.",
  },
];

function FeaturedRecipes() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-white">Featured Recipes</h2>
      <Row>
        {featuredRecipes.map((recipe) => (
          <Col md={4} key={recipe.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FeaturedRecipes;
