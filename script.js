function displayrecipe(response) {
    new Typewriter("#Recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 75, 
        cursor: "",
    });
}


function generateRecipe(event) {
    event.preventDefault(); 
    let instructionsinput=document.querySelector("#user-instructions").value;
    let apikey = "30927dtfa44b4770359oe8258a9c5b2c"; 
    let prompt ='Generate a recipe using the following ingredients:$(instructionsinput.value)';
    let context ="you are a chef with great knoledge of cooking and you are able to generate a recipe using ingredients provided by the user.";
    let apiurl='https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}';
   axios.get(apiurl).then(displayrecipe);}

    const ingredients = document.querySelector("#ingredients").value;
    
   
    const recipeElement = document.querySelector("#Recipe");
    recipeElement.innerHTML = "Generating recipe for: " + ingredients;
    
    
    





let recipeFormElement = document.querySelector("#Ai-recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
