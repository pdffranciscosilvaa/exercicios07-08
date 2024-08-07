function somarVetores() {
    let vetor1 = [];
    let vetor2 = [];
    for (let i = 0; i < 5; i++) {
        vetor1.push(Number(document.getElementById(`vetor1-${i}`).value));
        vetor2.push(Number(document.getElementById(`vetor2-${i}`).value));
    }
    
    let sub = [];
    for (let i = 0; i < 5; i++) {
        sub.push(vetor1[i] - vetor2[i]);
    }
    
    document.getElementById("resultado").innerText = `Subtração: [${sub.join(", ")}]`;
}