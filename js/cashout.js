const cashOutBtn = document.getElementById("cashout-btn").addEventListener("click", function(){
    const cashOutAmount = getInputFieldValueById("cashout-amount");
    const pinNumber = getInputFieldValueById("cashout-pin");
    const mainBalance = getTextValueById("main-balance");

    if(pinNumber === 1234){
        const updatedBalance = mainBalance - cashOutAmount;
       
        document.getElementById("main-balance").innerText= updatedBalance;
    }
    else{
        alert("Sorry Bro, Pin is Wrong")
    }
})