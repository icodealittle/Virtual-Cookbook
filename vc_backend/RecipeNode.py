from datetime import datetime
from typing import List, Dict


class RecipeNode:
    recipe_body: str
    recipe_title: str
    ingredients: List[str]
    email: str
    submitted_date: str
    reviews: Dict
    max_rating: int = 5
    rating: float
    number_of_reviews: int

    def __init__(self, recipe_body: str, recipe_title: str, email: str, time: str, ingredients: List[str],
                 reviews: Dict,
                 rating: int):
        self.recipe_body = recipe_body
        self.recipe_title = recipe_title
        self.email = email
        self.submitted_date = str(time)
        self.reviews = reviews
        self.rating = rating
        self.ingredients = ingredients
        self.number_of_reviews = len(reviews)
        self.total_reviews()

    def add_review(self, review: str, email: str, rating: int):
        self.reviews[email]["comment"] = review
        self.reviews[email]["rating"] = str(rating)

    def total_reviews(self):
        rating = 0

        for i in self.reviews:
            rating += int(self.reviews[i]["rating"])
        self.rating = round(rating / self.number_of_reviews, 2)

    def to_json(self):
        return {
            "recipe_title": self.recipe_title,
            "email": self.email,
            "submitted_date": self.submitted_date,
            "rating": self.rating,
            "number_of_reviews": self.number_of_reviews,
            "ingredients": self.ingredients,
            "recipe_body": self.recipe_body
        }

    def remove_review(self, email):
        del self.reviews[email]

    def edit_review(self, email, new_review):
        self.reviews[email].append(new_review)
