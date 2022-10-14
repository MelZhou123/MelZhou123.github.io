function fadeIn(){
    document.getElementById("descriptions").style.opacity=1;
    console.log ("test")
    document.getElementById("cap").classList.add("lidopen");
    document.getElementById("cap").classList.remove("lidclose");
}

/* The first line of the Javascript allows my words to appear on the screen, the second line allows for the console log to run error and debugging testing within the webpage. */
/* The third line allows you to have an operating open lid, the fourth line allows you to have an operating close lid. */

function fadeOut(){
    document.getElementById("descriptions").style.opacity=0;
    console.log ("test")
    document.getElementById("cap").classList.remove("lidopen");
    document.getElementById("cap").classList.add("lidclose");
}

/* This function allows the inverse to occur placing the lid back onto the perfume bottle lid. */