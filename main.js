var numeri = 0
var lista = []
for (var i = 0; i < 100; i++) {
  numeri= numeri - 0 + 1
  lista.push(numeri)
}

console.log(numeri);
console.log(lista);

for (var i = 2; i < lista.length; i += 3) {
  lista[i] = "Fizz"
}

console.log(lista);

for (var i = 4; i < lista.length; i += 5) {
  if (lista[i] != "Fizz") {
    lista[i] = "Buzz"
  }else {
    lista[i]= lista[i] + "Buzz"
  }
}

console.log(lista);

var schermo = "<li>1</li>"

for (var i = 1; i < lista.length; i++) {
  schermo = schermo + "<li>" + lista[i] + "</li>"
  document.getElementById("mioID").innerHTML = schermo
}

console.log(schermo);
