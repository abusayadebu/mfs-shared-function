// add money button catch
const addMoneyBtn = document.getElementById("add-money-btn").addEventListener("click", function(){
    const addMoneyAmount = getInputFieldValueById("add-amount");
    const pinNumber = getInputFieldValueById("pin-number");
    
    // pin validation
    if(pinNumber === 1234){
        const mainBalance = getTextValueById("main-balance");
        // update balnace
        const updatedbalance = mainBalance + addMoneyAmount;
        
        // update balance show
        document.getElementById("main-balance").innerText = updatedbalance;
    }
    else{
        alert("Wrong pin, try Again")
    }
})

