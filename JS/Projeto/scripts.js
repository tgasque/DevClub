const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert") //Valor em real
    const currencyValueConverted = document.querySelector (".currency-value-converted") //outras Moedas
  
console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2

    if(currencySelect.value == "dolar"){ //Se o Select estiver selecionado o Valor de Dolar entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){ //Se o Select estiver selecionado o Valor de Euro entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)  
}

convertButton.addEventListener("click", convertValues)