function getSalmo() {
    const number = document.getElementById('salmo');
    const regex = /^[1-9]{1,}[0-9]*/g;
    if(number.value.match(regex)){
        console.log(number.value);
        return;
    }
    
    alert('digite apenas numeros');
    number.value = "";
}