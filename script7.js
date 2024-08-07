let numeros = [];

function adicionarNumero() {
    let numero = parseInt(document.getElementById("numero").value);
    numeros.push(numero);
    document.getElementById("numero").value = "";
}

function inverterVetor() {
    if (numeros.length !== 5) {
        alert("O vetor deve ter exatamente 5 elementos.");
        return;
    }

    numeros.reverse();

    document.getElementById("resultado").textContent = `Vetor invertido: ${numeros}`;
}