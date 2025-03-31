
function generateRecipe(event) {
    event.preventDefault(); 
    
   
    const ingredients = document.querySelector("#ingredients").value;
    
   
    const recipeElement = document.querySelector("#Recipe");
    recipeElement.innerHTML = "Generating recipe for: " + ingredients;
    
    
    new Typewriter("#Recipe", {
        strings: ["Here's a recipe suggestion based on your ingredients: \n\n1. Cook the ingredients.\n2. Add some spices.\n3. Enjoy your meal!"],
        autoStart: true,
        delay: 75, 
        cursor: "",
    });
}


let recipeFormElement = document.querySelector("#Ai-recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
