async function buscarClima() {
  const cep = document.getElementById('cep').value;

  if (!cep) return alert("Digite um CEP válido!");

  try {
    const response = await fetch(`https://web-production-893a.up.railway.app/clima?cep=${cep}`);

    if (!response.ok) throw new Error("Erro ao buscar dados do clima");

    const data = await response.json();

    document.getElementById("weather-container").style.display = "block";
    document.getElementById("cepInfo").innerText = `📌 CEP: ${data.cep}`;
    document.getElementById("logradouro").innerText = `📍 Logradouro: ${data.logradouro}`;
    document.getElementById("bairro").innerText = `🏘️ Bairro: ${data.bairro}`;
    document.getElementById("cidade").innerText = `🌆 Cidade: ${data.cidade}`;
    document.getElementById("uf").innerText = `🗺️ Estado: ${data.uf}`;
    document.getElementById("ddd").innerText = `📞 DDD: ${data.ddd}`;
    document.getElementById("ibge").innerText = `🧾 IBGE: ${data.ibge}`;
    document.getElementById("siafi").innerText = `🏛️ SIAFI: ${data.siafi}`;


  } catch (error) {
    alert("Não foi possível obter os dados. Verifique o CEP ou tente novamente.");
    console.error(error);
  }
}
