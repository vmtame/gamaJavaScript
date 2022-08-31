function getSalmo() {
    const number = document.getElementById('salmo');
    const regex = /^[1-9]{1,}[0-9]*/g;
    if(number.value.match(regex)){
        const uri = "https://www.abibliadigital.com.br/api/verses/nvi/sl";

        fetch(`${uri}/${number.value}`).then(response => {
            return response.json();
        }).then(res => {
            console.log(res);

            // process first info
            document.getElementById("inName").value = res.book.name;
            document.getElementById("inAuthors").value = res.book.author;
            document.getElementById("inGroup").value = res.book.group;
            
            // process the verses
            let string = "<ul>";
            res.verses.forEach(verse => {
                string += `<li><strong>Verso ${verse.number}:</strong> ${verse.text}</li>`;
            });
            string += "</ul>";
            document.getElementById("output").innerHTML = string;
        });

        return;
    }
    
    alert('digite apenas numeros');
    number.value = "";
}