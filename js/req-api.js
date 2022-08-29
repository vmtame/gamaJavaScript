fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(response => {
    // console.log(response.json());
    return response.json();
}).then(response => {
    document.getElementById("value").innerHTML = response.USDBRL.low;
    document.getElementById("response").innerHTML = response.USDBRL.name;
});

fetch(`https://api.postmon.com.br/v1/cep/05049000`).then(response => {
    // console.log(response.json());
    return response.json();
}).then(response => {
    document.getElementById("cep").innerHTML = response.cep;
    document.getElementById("address").innerHTML = response.logradouro;
});