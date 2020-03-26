var lista = []

for (var numero = 1; numero <= 100; numero ++) {

  if (numero % 3 == 0 && numero % 5 == 0) {
    lista.push("FizzBuzz");
  }else if (numero % 5 == 0) {
    lista.push("Buzz")
  }else if (numero % 3 == 0) {
    lista.push("Fizz");
  }else {
    lista.push(numero);
  }
}
console.log(lista);
var schermo = "<li>1</li>"
for (var i = 1; i < lista.length; i++) {
  schermo = schermo + "<li>" + lista[i] + "</li>"
  document.getElementById("mioID").innerHTML = schermo
}
