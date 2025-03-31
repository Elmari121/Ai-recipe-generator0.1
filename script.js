
function displayRecipe(response) {
    new Typewriter("#Recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 75, 
        cursor: "",
    });
}


function generateRecipe(event) {
    event.preventDefault(); 

   
    let ingredients = document.querySelector("#ingredients").value;
    if (!ingredients) {
        alert("Please enter some ingredients.");
        return;
    }

  
    let apikey = "30927dtfa44b4770359oe8258a9c5b2c"; 
    let prompt = `Generate a recipe using the following ingredients: ${ingredients}`;
    let context = "You are a chef with great knowledge of cooking and you are able to generate a recipe using ingredients provided by the user.";

    
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apikey}`;

    
    axios.get(apiUrl).then(displayRecipe).catch((error) => {
        console.error("Error generating recipe:", error);
        alert("Something went wrong while generating the recipe.");
    });

    
    const recipeElement = document.querySelector("#Recipe");
    recipeElement.innerHTML = `Generating recipe for: ${ingredients}`;
}


const form = document.querySelector("#Ai-recipe-generator-form");
form.addEventListener("submit", generateRecipe);

    
    
    





let recipeFormElement = document.querySelector("#Ai-recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
