//Scrivi un programma che stampi i numeri da 1 a 100,
var numero = [];

for (i = 0; i < 100; i++) {
    var number = i + 1;
    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if ((Number(number) % 3 == 0) && (Number(number) % 5 == 0)){
        numero.push('FizzBuzz');
    //ma per i multipli di 3 stampi “Fizz” al posto del numero e
    } else if (Number(number) % 3 == 0){
        numero.push('Fizz');
    //per i multipli di 5 stampi Buzz.
    } else if (Number(number) % 5 == 0){
        numero.push('Buzz')
    } else {
        numero.push(number)
    }
}

console.log(numero);    
document.getElementById('numbers').innerHTML = numero + ' <br>';
