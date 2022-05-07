let dato1: number;
let dato2: number;
let contador: number;
let suma: number = 0;
dato1 = Number(prompt("Ingrese el primer numero" + contador + ":"));
dato2 = Number(prompt("Ingrese el segundo numero"));
for (let contador: number = dato1; contador <= dato2; contador++) {
  suma += contador;
}
console.log("La suma entre numeros es " + suma);
