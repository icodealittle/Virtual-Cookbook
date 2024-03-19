import json
import random
from typing import IO
from vc_backend.RecipeNode import RecipeNode


# except Exception:
#     return {}


def write_json(data: dict, fp: IO[str]):
    return json.dump(data, fp, indent=2)


class Recipes:
    flagged = {}
    submitted = {}
    recipes = {}

    def __init__(self):
        self.read_json()

    def read_json(self):
        # data = json.loads("TestRecipes.json")
        with open("../Virtual-Cookbook/vc_backend/recipesDump.json", "r") as file:
            data = json.load(file)
            for i in data:
                d = dict(i)
                self.add_recipe(
                    RecipeNode(d["recipe_body"], d["recipe_title"].lower(), d["email"], "", d["ingredients"],
                               d["reviews"], d["rating"]))
            print(self.recipes)

    def add_recipe(self, data: RecipeNode):
        if data.email not in self.flagged:
            self.recipes[data.recipe_title.lower()] = data

    def delete_recipe(self, recipe_name):
        del self.recipes[recipe_name]

    def getAll(self):
        return self.recipes

    def getAllNames(self):
        return self.recipes.keys()

    def getRecipe(self, name):
        return self.recipes[name]


    def getRandomRecipe(self):
        val = random.choice(list(self.recipes.keys()))
        return self.recipes[val]
