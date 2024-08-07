let numeros = []; 

function adicionarNumero() {
    let numero = parseInt(document.getElementById("numero").value);
    numeros.push(numero);
    document.getElementById("numero").value = "";
}

function calcularSoma() {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    document.getElementById("resultado").textContent = `A soma dos números é: ${soma}`;
}