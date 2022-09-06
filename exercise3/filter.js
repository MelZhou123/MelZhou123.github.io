function filterCategory(filterSelection, filterBy){
    let recipeCards=Array.from (document.getElementsByClassName("RecipeCardWrapper"));
    //console.log(recipeCards);
    for(let listItem of recipeCards){
        // console.log (listItem.dataset.author)
        if (listItem.dataset[filterBy] === filterSelection) {
            listItem.style.display="flex";
        } else {
            listItem.style.display="none";
    }
}

}
/* The javascript coding permits for the filtering function to work as well as for..of statements and arrays. */

function allCategories(){
    
        let recipeCards=Array.from (document.getElementsByClassName("RecipeCardWrapper"));
        //console.log(recipeCards);
        for(let listItem of recipeCards){
            listItem.style.display="flex";
          
    
    }

/* The javascript coding permits for the filtering function to work as well as for...of statements and arrays. */



}
