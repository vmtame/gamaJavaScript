function getSalmo() {

    const number = document.getElementById('salmo');
    const regex = /^[1-9]{1,}[0-9]*$/g;

    if(number.value.match(regex)){

        if(number.value > 150 || number.value < 0) {
            alert("Salmo nao existe");
            cleanScr();
            return;
        }
        const uri = `https://www.abibliadigital.com.br/api/verses/nvi/sl/${number.value}`;

        fetch( uri )
        .then(response => response.json())
        .then(res => {
            // process first info
            document.getElementById("inName").value = res.book.name;
            document.getElementById("inAuthors").value = res.book.author;
            document.getElementById("inGroup").value = res.book.group;

            // process the verses
            let string = "<ul class='ul-versos'>";
            res.verses.forEach(verse => {
                string += `<li><strong>Verso ${verse.number}:</strong> ${verse.text}</li>`;
            });
            string += "</ul>";
            document.getElementById("output").innerHTML = string;
            document.getElementById("div-response").style.display = 'block';
        }).catch( () => {
            alert("Houve problema na busca!");
            cleanScr();
        });

        return;
    }
    
    alert('digite apenas numeros');
    cleanScr();
    // number.value = "";
}

function cleanScr() {
    document.getElementById("div-response").style.display = 'none';

    const group = document.getElementsByClassName('to-clean');
    for(let i = 0; i < group.length; i++) {
        group[i].value = ""
    }

}