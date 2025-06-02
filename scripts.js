const form = document.getElementById("converter-form");
const amount = document.getElementById("amount");
const fromtCurrency = document.getElementById("fromCurrency");
const convertedAmount = document.getElementById("convertedAmount");
const toCurrency = document.getElementById("toCurrency");
const loading = document.querySelector(".loading");
const result= document.querySelector(".result");
const error = document.querySelector(".error");

const API_URL = "https://api.exchangerate-api.com/v4/latest/"

// Function to convert money based on user input        


async function convertMoney(){

    loading.style.display = "block"
    error.style.display = "none"
    result.style.display = "none"
   
    try {

        const response = await fetch(API_URL + fromtCurrency.value)
        const data = await response.json()

        const rate = data.rates[toCurrency.value];
        const convertedValue = (amount.value * rate).toFixed(2);

        convertedAmount.value = convertedValue;
        result.style.display = "block";

        result.innerHTML = `
       <div style="font-size: 1.4rem;">
           <p>${amount.value} ${fromtCurrency.value} = ${convertedValue} ${toCurrency.value}</p>
        </div>
        <div style="font-size: 0.9rem; opacity: 0.8; margin-top: 10px;">
            Taxa: 1 ${fromtCurrency.value} = ${rate} ${toCurrency.value}
        </div>
         `
    }
    catch (err){
        error.style.display = "block";
        error.innerHTML = `Erro ao converter moeda! Tente novamente.`
    }
     loading.style.display = "none";

}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    convertMoney();

}) 