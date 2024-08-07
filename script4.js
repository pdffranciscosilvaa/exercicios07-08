function somarVetores() {
            let vetor1 = [];
            let vetor2 = [];
            for (let i = 0; i < 5; i++) {
                vetor1.push(Number(document.getElementById(`vetor1-${i}`).value));
                vetor2.push(Number(document.getElementById(`vetor2-${i}`).value));
            }
            
            let soma = [];
            for (let i = 0; i < 5; i++) {
                soma.push(vetor1[i] + vetor2[i]);
            }
            
            document.getElementById("resultado").innerText = `Soma: [${soma.join(", ")}]`;
        }