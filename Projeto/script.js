const apiKey = "c178c19843cf8020f701f1a4";

async function converter(targetCurrency) {
  const valorReal = document.getElementById("valor").value;
  const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/BRL/${targetCurrency}`);
  const data = await response.json();
  const exchangeRate = data.conversion_rate;
  
  const convertedValue = valorReal * exchangeRate;

  // Limpar os elementos antes de atualizar os valores
  document.getElementById("dolar").textContent = "";
  document.getElementById("euro").textContent = "";
  document.getElementById("yens").textContent = "";
  document.getElementById("pound").textContent = "";
  document.getElementById("cad").textContent = "";
  document.getElementById("peso").textContent = "";


  if (targetCurrency === "USD") {
    document.getElementById("dolar").textContent = `Valor em Dólar: $${convertedValue.toFixed(2)}`;
  } else if (targetCurrency === "EUR") {
    document.getElementById("euro").textContent = `Valor em Euro: €${convertedValue.toFixed(2)}`;
  } else if (targetCurrency === "JPY") {
    document.getElementById("yens").textContent = `Valor em Yens: ¥${convertedValue.toFixed(2)}`;
  } else if (targetCurrency === "GBP") {
    document.getElementById("pound").textContent = `Valor em Libras Esterlinas: £${convertedValue.toFixed(2)}`;
  } else if (targetCurrency === "CAD") {
    document.getElementById("cad").textContent = `Valor em Dólar Canadense: C$${convertedValue.toFixed(2)}`;
  } else if (targetCurrency === "ARS") {
    document.getElementById("peso").textContent = `Valor em Peso Argentino: $${convertedValue.toFixed(2)} ARS`;
  }
}