const apiKey = "c178c19843cf8020f701f1a4";
const Button = document.getElementById("button");
const Value = document.getElementById("value");

async function getQuote(baseCurrency, targetCurrency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}`);
      const data = await response.json();
      const exchangeRate = data.conversion_rate;
      
      Value.textContent = `1 ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
  
      // Definir a imagem e a nota da currency 1
      const currency1Img = document.getElementById("currency-1-img");
      const currency1Note = document.getElementById("currency-1-note");
      currency1Img.src = `imagens/${baseCurrency}.jpg`;
      currency1Img.alt = baseCurrency;
      currency1Note.textContent = `Nota: ${baseCurrency}`;
  
      // Definir a imagem e a nota da currency 2
      const currency2Img = document.getElementById("currency-2-img");
      const currency2Note = document.getElementById("currency-2-note");
      currency2Img.src = `imagens/${targetCurrency}.jpg`;
      currency2Img.alt = targetCurrency;
      currency2Note.textContent = `Nota: ${targetCurrency}`;
    } catch (error) {
      console.log("Ocorreu um erro ao obter a cotação:", error);
    }
  }

Button.addEventListener("click", function() {
  const currency1 = document.getElementById("currency-1").value;
  const currency2 = document.getElementById("currency-2").value;

  getQuote(currency1, currency2);
});