import React, { useState, useEffect } from 'react';

const RecipePage: React.FC<{ recipeName: string }> = ({ recipeName }) => {
  const [recipeData, setRecipeData] = useState<null>(null); // Use 'any' type for simplicity, replace with appropriate type

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/getRecipe/${recipeName.toLowerCase()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipe data');
        }
        const data = await response.json();
        setRecipeData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipeData().then(() => {});
  }, [recipeName]);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-page">
      <h1>{recipeData.recipe_title}</h1>
      <p>Submitted by: {recipeData.email}</p>
      <p>Submitted date: {recipeData.submitted_date}</p>
      <p>Rating: {recipeData.rating}</p>
      <p>Number of Reviews: {recipeData.number_of_reviews}</p>
      <h2>Ingredients:</h2>
      <ul>
        {recipeData.ingredients.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Recipe Body:</h2>
      <p>{recipeData.recipe_body}</p>
    </div>
  );
};

export default RecipePage;
