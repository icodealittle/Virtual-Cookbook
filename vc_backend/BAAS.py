# an object of WSGI application
import datetime
import time

from flask import Flask

from vc_backend.RecipeNode import RecipeNode
from vc_backend.Recipes import read_json, Recipes

recipes = Recipes()

app = Flask(__name__)  # Flask constructor


@app.route('/')  # Router main channel
def hello():
    return 'Virtual Cookbook App'


# routing the decorator function hello_name
@app.route('/hello/<name>')
def hello_variable(name):
    return 'Hello %s!' % name


@app.route('/submission/<recipe>,><recipe_name>,<email>')
def submit_recipe(recipe, recipe_name, email):
    recipe_submission = RecipeNode(recipe_body=recipe, recipe_title=recipe_name, email=email,
                                   time=datetime.datetime.ctime(), rating=0, reviews={})
    recipes.add_recipe(recipe_submission)


@app.route('/deletion/<recipe>,><recipe_name>,<email>')
def delete_recipe(recipe, recipe_name, email):
    recipes.delete_recipe(recipe_name)


if __name__ == '__main__':
    app.run()
