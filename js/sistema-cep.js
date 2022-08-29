function search() {
    const zip = document.getElementById("zipcode").value ;

    fetch(`https://api.postmon.com.br/v1/cep/${zip}`).then(response => {
        // console.log(response.json());
        return response.json();
    }).then(response => {
        document.getElementById("zip").value = response.cep;
        document.getElementById("neighbourhood").value = response.bairro;
        document.getElementById("state").value = response.estado;
        document.getElementById("city").value = response.cidade;
        document.getElementById("address").value = response.logradouro;

    });
}

function clean() {
    const group = document.getElementsByClassName('clean');
    for(let i = 0; i < group.length; i++) {
        group[i].value = ""
    }
}