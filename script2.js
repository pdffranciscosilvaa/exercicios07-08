let vetor1 = [1, 2, 3, 4, 5];

let escalar = 7;

let vetorResultado = [];

for (let i = 0; i < vetor1.length; i++) {
    vetorResultado.push(vetor1[i] + escalar);
}

document.getElementById("vetor-original").innerHTML = "Vetor original: " + vetor1;
document.getElementById("vetor-resultado").innerHTML = "Vetor resultado após soma de " + escalar + ": " + vetorResultado;
