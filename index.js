const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromcurrency");
const toCurrencySelect = document.getElementById("tocurrency");
const convertButton = document.getElementById("convertbutton");
const resultDiv = document.getElementById("result");

const apiurl = "https://api.exchangerate-api.com/v4/latest";

convertButton.addEventListener("click", ()=>{
    const amount = parseFloat(amountInput.value);
    const fromcurrency = fromCurrencySelect.value;
    const tocurrency = toCurrencySelect.value;
    const query = `${apiurl}/${fromcurrency}`;
    console.log(query);
    
    fetch(query).then((response)=>{
        return response.json();  
    }).then((data)=>{
        console.log(data,"Second then block");

        const exchangerate = data.rates[tocurrency];
        const convertedAmount = amount * exchangerate;
        resultDiv.textContent= `${amount} ${fromcurrency} = ${convertedAmount.toFixed(2)} ${tocurrency}`;
        console.log(exchangerate);
    });

    

});

