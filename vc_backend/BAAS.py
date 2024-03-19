import datetime
from flask import Flask, request, jsonify
from vc_backend.RecipeNode import RecipeNode
from vc_backend.Recipes import Recipes

recipes = Recipes()

app = Flask(__name__)  # Flask constructor


@app.route('/')  # Router main channel
def hello():
    return 'Virtual Cookbook App'


# routing the decorator function hello_name
@app.route('/hello/<name>')
def hello_variable(name):
    return 'Hello %s!' % name


@app.route('/submission/<recipe>/<recipe_name>/<email>', methods=['GET'])
def submit_recipe(recipe, recipe_name, email):
    recipe_submission = RecipeNode(recipe_body=recipe, recipe_title=recipe_name, email=email,
                                   time=datetime.datetime.ctime(), rating=0, reviews={})
    recipes.add_recipe(recipe_submission)
    return jsonify({'message': 'Recipe submitted successfully'}), 200


@app.route('/deletion/<recipe>/<recipe_name>/<email>', methods=['GET'])
def delete_recipe(recipe, recipe_name, email):
    for recipe_entry in recipes.getAll():
        if recipe_entry['recipe_title'] == recipe_name:
            recipes.delete_recipe(recipe_entry)
            return jsonify({'message': 'Recipe deleted successfully'}), 200
    return jsonify({'message': 'Recipe not found'}), 404


@app.route('/getRecipe/<recipe>/', methods=['GET'])
def getRecipe(recipe):
    print(recipes.getRecipe(recipe.lower()))
    v = recipes.getRecipe(recipe.lower())
    return to_json(v)


def to_json(node: RecipeNode):
    return {
        "recipe_title": node.recipe_title,
        "email": node.email,
        "submitted_date": node.submitted_date,
        "rating": node.rating,
        "number_of_reviews": node.number_of_reviews,
        "ingredients": node.ingredients,
        "recipe_body": node.recipe_body
    }


if __name__ == '__main__':
    app.run(debug=True)  # Remove debug=True for production
