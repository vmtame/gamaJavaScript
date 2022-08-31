function getSalmo() {

    const number = document.getElementById('salmo');
    const regex = /^[1-9]{1,}[0-9]*$/g;

    if(number.value.match(regex)){

        if(number.value > 150 || number.value < 0) {
            alert("Salmo nao existe");
            return;
        }
        const uri = `https://www.abibliadigital.com.br/api/verses/nvi/sl/${number.value}`;

        fetch( uri )
        .then(response => response.json())
        .then(res => {
            // console.log(res);

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
        }).catch( () => alert("Houve problema na busca!") )

        return;
    }
    
    alert('digite apenas numeros');
    number.value = "";
}