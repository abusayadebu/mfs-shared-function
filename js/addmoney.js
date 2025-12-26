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

        // add transaction history--
        const p = document.createElement('p');
        p.classList.add('bg-purple-300', 'text-black', 'text-lg', 'font-semi-bold', 'px-2', 'rounded-xl','mb-2')
        
        p.innerText = `${addMoneyAmount} Tk Added. New Balance = ${updatedbalance} Tk.`
        document.getElementById("transaction-div").appendChild(p);

        
    }
    else{
        alert("Wrong pin, try Again")
    }
})

