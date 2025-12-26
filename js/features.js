// when cashOut Button clicked---
const cashoutBtn = document.getElementById("cash-big-btn").addEventListener("click", function(){
    getSectionById("cashOut-form");
})

// when add money Button clicked---
const addMoneyBigBtn = document.getElementById("add-big-btn").addEventListener("click", function(){
    getSectionById("add-money-form");
})

// when Transaction Button clicked---

const TransactionBtn = document.getElementById("transaction-btn").addEventListener("click", function(){
     getSectionById("transaction-div");
})
