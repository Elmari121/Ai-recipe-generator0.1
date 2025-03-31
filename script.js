
function displayRecipe(response) {
    const recipeElement = document.querySelector("#Recipe");
    const loadingIndicator = document.querySelector("#loading-indicator");

    loadingIndicator.style.display = 'none'; 
    recipeElement.innerHTML = '';

    
    new Typewriter(recipeElement, {
        strings: formatRecipe(response.data.answer),
        autoStart: true,
        delay: 30,
        cursor: "",
    });
}


function formatRecipe(recipeText) {
    
    let formattedRecipe = recipeText;

   

    
    formattedRecipe = formattedRecipe.replace(/Ingredients:/, "<h3>Ingredients:</h3><ul>");
    formattedRecipe = formattedRecipe.replace(/Instructions:/, "</ul><h3>Instructions:</h3><ol>");


    formattedRecipe = formattedRecipe.replace(/, /g, "</li><li>").replace(/\n/g, "</li><li>");

    formattedRecipe = "<ul><li>" + formattedRecipe + "</li></ul>"; 

    return formattedRecipe; 
}


function generateRecipe(event) {
    event.preventDefault();

    const ingredients = document.querySelector("#ingredients").value.trim();
    const loadingIndicator = document.querySelector("#loading-indicator");

    
    if (!ingredients) {
        alert("Please enter some ingredients.");
        return;
    }

    
    loadingIndicator.style.display = 'block';

    const apikey = "30927dtfa44b4770359oe8258a9c5b2c"; 
    const prompt = `Generate a recipe using the following ingredients: ${ingredients}`;
    const context = "You are a chef with great knowledge of cooking and you are able to generate a recipe using ingredients provided by the user.";
    const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apikey}`;

    
    axios.get(apiUrl)
        .then(displayRecipe)
        .catch((error) => {
            console.error("Error generating recipe:", error);
            alert("Something went wrong while generating the recipe.");
            loadingIndicator.style.display = 'none'; 
        });

    
    const recipeElement = document.querySelector("#Recipe");
    recipeElement.innerHTML = `Generating recipe for: ${ingredients}`;
}


function clearInput() {
    document.querySelector("#ingredients").value = '';
    document.querySelector("#Recipe").innerHTML = '';
    document.querySelector("#loading-indicator").style.display = 'none';
}


const form = document.querySelector("#Ai-recipe-generator-form");
form.addEventListener("submit", generateRecipe);


const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearInput);
