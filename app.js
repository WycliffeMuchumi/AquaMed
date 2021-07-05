// Demonstrating callback hell/ having callbacks inside of callbacks
// The above is resolved by the use of promises in ES6
function getRecipe(){
    // Simulating ajax call
    setTimeout(() => {
        const recipeID = [435, 456, 654, 900];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Wycliffe'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipeTwo = {title: 'Italian Pizza', publisher: 'Wycliffe'};
                console.log(recipe);
            }, 1500, recipe.publisher);

        }, 1500, recipeID[2]);

    }, 1500);
}
getRecipe();