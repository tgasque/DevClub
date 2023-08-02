const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert") //Valor em real
    const currencyValueConverted = document.querySelector (".currency-value-converted") //outras Moedas
  
    const dolarToday = 4.81
    const euroToday = 5.27
    const libraToday = 6.12
    const bitcoinToday = 140

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
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){ //Se o Select estiver selecionado o Valor de Libra entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("lb-LB", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin"){ //Se o Select estiver selecionado o Valor de Bitcoin entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"BTC "
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)  
}

function changeCurrucy(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if(currencySelect.value == "dolar"){
    currencyName.innerHTML =  ("Dolar Americano")
    currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML =  ("Euro")
        currencyImage.src = "./assets/euro.png"
        }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML =  ("Libra")
        currencyImage.src = "./assets/libra.png"
        }


    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML =  ("Bitcoin")
        currencyImage.src = "./assets/bitcoin.png"
        }
        convertValues()
}

currencySelect.addEventListener("change", changeCurrucy)
convertButton.addEventListener("click", convertValues)