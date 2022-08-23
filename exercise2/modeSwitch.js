let isDark=false;

/* This code allows you to change from light mode to dark mode for the webpage, the false insertion is known as a boolean-which creates true/false statements for the code created for the webpage.  */

function switchModes (){

    
    
        if(isDark === true){
            console.log("i'm true");
            document.documentElement.style.setProperty("--col-01","#171219");
            document.documentElement.style.setProperty("--col-02","#f2fbeb");
            document.getElementByIdByID ("modebutton").innerhTML="Dark Mode";
            isDark=false;
        } else {
        console.log ("i'm false");
        document.documentElement.style.setProperty("--col-01","#f2fbeb");
        document.documentElement.style.setProperty("--col-02","#171219");
        document.getElementById("modeButton").innerHTML="Light Mode";
        isDark=true;

    }
}

/* Adding the above code allows for you to allow for your webpage to have colour as well as light to dark mode function. */