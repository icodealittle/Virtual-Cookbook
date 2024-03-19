from datetime import datetime
from typing import List, Dict

class RecipeNode:
    recipe_body: str
    recipe_title: str
    email: str
    submitted_date: str
    reviews: Dict[str,List[str]]
    max_rating: int = 5
    rating: int

    def __init__(self, recipe_body: str, recipe_title: str, email: str, time: str, reviews: Dict[str,List[str]],
                 rating: int):
        self.recipe_body = recipe_body
        self.recipe_title = recipe_title
        self.email = email
        self.submitted_date = str(time)
        self.reviews = reviews
        self.rating = rating

    def add_review(self,review:str,email:str):
        self.reviews[email].append(review)

    def remove_review(self,email):
        del self.reviews[email]

    def edit_review(self,email,new_review):
        self.reviews[email].append(new_review)

