const form = document.getElementById("converter-form");
const mount = document.getElementById("amount");
const fromtCurrency = document.getElementById("fromCurrency");
const convertedAmount = document.getElementById("convertedAmount");
const toCurrency = document.getElementById("toCurrency");
const loading = document.getSelector(".loading");
const result= document.getSelector(".result");
const error = document.getSelector(".error");



// Function to convert money based on user input        


function convertMoney(){

}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    convertMoney();

})