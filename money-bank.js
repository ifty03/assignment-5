

/*-------------------------------------
    catch InputValue using function
-------------------------------------*/
function getValue(isName){
    const previousValue = document.getElementById(isName);
    const newValue = parseFloat(previousValue.value);
    return newValue; 
}


function totalExpenses(){
    // const foodCost = document.getElementById("food-cost");
    // const foodCostValue = foodCost.value;
    const foodCostValue = getValue("food-cost");
    // const rentCost = document.getElementById("rent-cost");
    // const rentCostValue = rentCost.value;
    const rentCostValue = getValue("rent-cost");
    // const clothCost = document.getElementById("cloth-cost");
    // const clothCostValue = clothCost.value;
    const clothCostValue = getValue("cloth-cost");

    const totalExpanses = document.getElementById("total-expanses");
    const totalExpansesValue = totalExpanses.innerText = parseFloat(foodCostValue) + parseFloat(rentCostValue) + parseFloat(clothCostValue);
    return totalExpansesValue;
}

function balance(){
// const totalIncome = document.getElementById("total-income");
// const totalIncomeValue = parseFloat(totalIncome.value);
const totalIncomeValue = getValue("total-income");
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
    // const totalIncome = document.getElementById("total-income");
    // const totalIncomeValue = parseFloat(totalIncome.value);
    const totalIncomeValue =getValue("total-income");

    // const savingInput = document.getElementById("saving-input");
    // const savingInputValue = parseFloat(savingInput.value);
    const savingInputValue = getValue("saving-input");
    
    const savingAmount = document.getElementById("saving-amount");
    const savingAmountValue = savingAmount.innerText = (totalIncomeValue / 100) * savingInputValue;
    return savingAmountValue;
})
