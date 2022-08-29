function search() {
    const zip = document.getElementById("zipcode").value ;

    fetch(`https://api.postmon.com.br/v1/cep/${zip}`).then(response => {
        console.log(response.json());
        // return response.json();
    }).then(response => {
        // document.getElementById("cep").innerHTML = response.cep;
        // document.getElementById("address").innerHTML = response.logradouro;
    });
}

function clean() {
    document.getElementsByClassName('clean').value = "";
}