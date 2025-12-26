// when cashOut Button clicked---
const cashoutBtn = document.getElementById("cash-big-btn").addEventListener("click", function(){
    getSectionById("add-money-form").classList.add("hidden");
    getSectionById("cashOut-form").classList.remove("hidden");
    getSectionById("transaction-div").classList.add("hidden")
})

// when add money Button clicked---
const addMoneyBigBtn = document.getElementById("add-big-btn").addEventListener("click", function(){
    getSectionById("add-money-form").classList.remove("hidden");
    getSectionById("cashOut-form").classList.add("hidden");
    getSectionById("transaction-div").classList.add("hidden")
})

// when Transaction Button clicked---

const TransactionBtn = document.getElementById("transaction-btn").addEventListener("click", function(){
    getSectionById("transaction-div").classList.remove("hidden")
    getSectionById("add-money-form").classList.add("hidden");
    getSectionById("cashOut-form").classList.add("hidden");
    
})
