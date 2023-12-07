const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let guarda = 0;

const numInteiro = (numero) => {
    return Number.isInteger(numero);
};

function numDivPor3(numero) {
    return numero % 3 === 0;
}

function numDivPor5(numero) {
    return numero % 5 === 0;
}

function SomatorioInt35(numero) {
    console.log('O número digitado foi: ', numero);

    for (let i = 1; i < numero; i++) {
        if (numDivPor3(i) || numDivPor5(i)) {
            guarda += i;
            console.log(`Somando ${i} +`);
        }
    }

    console.log('Somatório = ', guarda);
}

function solicitaNumero() {
    rl.question('Digite um número inteiro: ', (input) => {
        const numero = parseInt(input, 10);

        if (numInteiro(numero)) {
            console.clear();
            SomatorioInt35(numero);
            rl.close();
        } else {
            console.clear();
            console.log('Por favor, digite um número inteiro válido.');
            solicitaNumero();
        }
    });
}

solicitaNumero();
