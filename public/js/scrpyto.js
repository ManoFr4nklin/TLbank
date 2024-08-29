const cryptoName = document.getElementById('crypto-name');
const cryptoPrice = document.getElementById('crypto-price');


const cryptoId = 'bitcoin'; 

// API da CoinMarketCap
const apiKey = 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'; //chave api do site
const apiUrl = `https://pro-api.coinmarketcap.com`;


async function updateCryptoPrice() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-CMC_PRO_API_KEY': apiKey
            }
        });
        const data = await response.json();
        
        
        cryptoName.textContent = cryptoId.charAt(0).toUpperCase() + cryptoId.slice(1);
        cryptoPrice.textContent = `R$${data.data[cryptoId.toUpperCase()].quote.BRL.price.toFixed(2)}`;
    } catch (error) {
        console.error('Erro ao buscar o preço da criptomoeda:', error);
        cryptoPrice.textContent = 'Erro ao carregar o preço';
    }
}


updateCryptoPrice();


setInterval(updateCryptoPrice, 60000);
