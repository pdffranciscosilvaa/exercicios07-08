// Definindo o vetor1
let vetor1 = [1, 2, 3, 4, 5];

// Função para calcular o produto por escalar
function calcularProduto() {
    // Pegando o valor do número escalar digitado pelo usuário
    let escalar = document.getElementById("escalar").value;
    
    // Criando um vetor vazio para armazenar os resultados
    let vetorResultado = [];
    
    // Usando um laço "for" para multiplicar cada elemento por escalar
    for (let i = 0; i < vetor1.length; i++) {
        vetorResultado.push(vetor1[i] * escalar);
    }
    
    // Apresentando o resultado na tela
    document.getElementById("vetor-original").innerHTML = "Vetor original: " + vetor1;
    document.getElementById("vetor-resultado").innerHTML = "Vetor resultado após multiplicação por " + escalar + ": " + vetorResultado;
}
