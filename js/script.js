'use strict'
//Sehun Babatunde

//let numbersCheckBox = document.querySelector("#numbersInPasswordCheckbox option:checked").value;
//let symbolsCheckBox = document.querySelector("#symbolsInPasswordCheckbox option:checked").value;
//let passwordLengthNumber = document.querySelector("#passwordLengthSelect option:checked").value;

 /* Special thanks for guidance: https://www.programiz.com/javascript/examples/generate-random-strings
                                 https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_display_checkbox_text 
                                 https://stackoverflow.com/questions/14333797/finding-which-option-is-selected-in-select-without-jquery
                                 https://www.w3schools.com/jsref/prop_select_value.asp
                                 */

function generatePasswordStringFunction()
{
    let passwordLengthNumber = document.querySelector("#passwordLengthSelect option:checked").value;
    let numbersCheckbox = document.querySelector("#numbersInPasswordCheckbox");
    let symbolsCheckbox = document.querySelector("#symbolsInPasswordCheckbox");
    let mergedCharacters = "";
    let finalGeneratedPassword = "";
    let charactersLength = mergedCharacters.length;
   
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=£–";
    
    if (numbersCheckbox.checked == true) {
        mergedCharacters = characters.concat(numbers);
        charactersLength = mergedCharacters.length;
        //console.log(mergedCharacters);
    }
    if (symbolsCheckbox.checked == true)
    {
        mergedCharacters = characters.concat(symbols);
        charactersLength = mergedCharacters.length;
        //console.log(finalGeneratedPassword);
    }
    if (numbersCheckbox.checked == true && symbolsCheckbox.checked == true) {
        
        mergedCharacters = characters.concat(numbers, symbols);
        charactersLength = mergedCharacters.length;
        
    }

    for (let i = 0; i < passwordLengthNumber; i++) {
        finalGeneratedPassword += mergedCharacters.charAt(Math.floor(Math.random() * charactersLength));
        
    }

    if (numbersCheckbox.checked == false && symbolsCheckbox.checked == false) {
        charactersLength = characters.length;
        for (let i = 0; i < passwordLengthNumber; i++) {
            finalGeneratedPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
            
        }
    }

    console.log(finalGeneratedPassword);
    return finalGeneratedPassword;

    //console.log(mergedCharacters);
    //console.log(passwordLengthNumber);
    
}


 document.querySelector("button#generatePasswordButton").addEventListener("click", generatePasswordStringFunction);

