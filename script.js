// Definindo o vetor1
let vetor1 = [1, 2, 3, 4, 5];

// Criando um vetor vazio para armazenar os resultados
let vetorResultado = [];

// Usando um laço "for" para multiplicar cada elemento por 3
for (let i = 0; i < vetor1.length; i++) {
    vetorResultado.push(vetor1[i] * 3);
}

// Apresentando o resultado na tela
document.getElementById("vetor-original").innerHTML = "Vetor original: " + vetor1;
document.getElementById("vetor-resultado").innerHTML = "Vetor resultado após multiplicação por 3: " + vetorResultado;
