import json
from typing import IO

from vc_backend.RecipeNode import RecipeNode


def read_json():
    try:
        data = json.loads("TestRecipes.json")
    except Exception:
        data = {}
    return data


def write_json(data: dict, fp: IO[str]):
    return json.dump(data, fp, indent=2)


class Recipes:
    recipes = {}
    flagged = {}
    submitted = {}

    def __init__(self):
        self.recipes = read_json()

    def add_recipe(self, data: RecipeNode):
        if data.email not in self.flagged:
            self.recipes[data.recipe_title] = data

    def delete_recipe(self,recipe_name):
        del self.recipes[recipe_name]

