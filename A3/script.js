

function openBottle(description, lid){
    if (lid.classList.contains('lidclose')){
        document.getElementById("descriptions"+description).style.opacity=1;
        lid.classList.add("lidopen");
        lid.classList.remove("lidclose");
    }

    /* This function allows the inverse to occur placing the lid back onto the perfume bottle lid. */

    else{
        document.getElementById("descriptions"+description).style.opacity=0;
        lid.classList.remove("lidopen");
        lid.classList.add("lidclose");
    }
}

/* This function allows for the perfume lid of the bottle to be opened.  */
