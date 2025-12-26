// // Common Shared Functions here--
// --------------------------------------


// to get iput field value
function getInputFieldValueById(id){
    const inputvalue = document.getElementById(id).value;
    const inputValueNumber = parseInt(inputvalue); 
    return inputValueNumber;
}

// to get text value or inner text value----------

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textvalueNumber = parseInt(textValue);
    return textvalueNumber;
}

// to ghet whole section by ID-- 

function getSectionById(id){
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cashOut-form").classList.add("hidden");
    document.getElementById("transaction-div").classList.add("hidden")

    document.getElementById(id).classList.remove("hidden");
    
}
