const URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

fetch(URL).then(response => response.json())
.then(data => {
    document.querySelector('#bitcoin-price').innerText = "$" + data.bitcoin.usd;
    document.querySelector('#ethereum-price').innerText = "$" + data.ethereum.usd;
    document.querySelector('#dogecoin-price').innerText = "$" + data.dogecoin.usd;
}).catch(err => {
    console.log(err);
})
