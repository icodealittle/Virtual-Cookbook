import axios from 'axios';

// Base URL of your Flask server
const BASE_URL = 'http://localhost/';

// Function to submit a recipe
const submitRecipe = async (recipe: string, recipeName: string, email: string) => {
    try {
        const response = await axios.get(`${BASE_URL}submission/${recipe}/${recipeName}/${email}`);
        console.log(response.data); // Assuming server returns some data
    } catch (error) {
        console.error('Error submitting recipe:', error);
    }
};

const deleteRecipe = async (recipe: string, recipeName: string, email: string) => {
    try {
        const response = await axios.get(`${BASE_URL}deletion/${recipe}/${recipeName}/${email}`);
        console.log(response);
    } catch (error) {
        console.error('Error deleting recipe:', error);
    }
};

submitRecipe('recipe body', 'recipe name', 'email@example.com');
deleteRecipe('recipe', 'recipe name', 'email@example.com');
