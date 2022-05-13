
printRecipe("Mole", 2, ["cinnamon", "cumin", "cocoa"])

function printRecipe(title, servings, ingredients){
    console.log(title);
    console.log("Serves: " + servings);
    console.log("Ingredients:");
    for(var ingredient of ingredients){
        console.log(ingredient);
    }
}

function 