function totalExpenses(){
    const foodCost = document.getElementById("food-cost");
    const foodCostValue = foodCost.value;
    const rentCost = document.getElementById("rent-cost");
    const rentCostValue = rentCost.value;
    const clothCost = document.getElementById("cloth-cost");
    const clothCostValue = clothCost.value;

    const totalExpanses = document.getElementById("total-expanses");
    const totalExpansesValue = totalExpanses.innerText = parseFloat(foodCostValue) + parseFloat(rentCostValue) + parseFloat(clothCostValue);
    return totalExpansesValue;
}

function balance(){
const totalIncome = document.getElementById("total-income");
const totalIncomeValue = parseFloat(totalIncome.value);
const totalExpanses = parseFloat(totalExpenses());
const balance = document.getElementById("balance");
const balanceValue = balance.innerText = totalIncomeValue - totalExpanses;
return balanceValue;
}
document.getElementById("calculate-btn").addEventListener("click",function(){
    totalExpenses();
    balance();
})

document.getElementById("save-btn").addEventListener("click",function(){
    
})
