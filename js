const pessoas = [];


function atualizarResultados() {
    let maiorAltura = -Infinity;
    let menorAltura = Infinity;
    let somaAlturaMasculino = 0;
    let quantidadeMasculino = 0;
    let quantidadeFeminino = 0;

    
    pessoas.forEach(pessoa => {
        if (pessoa.altura > maiorAltura) maiorAltura = pessoa.altura;
        if (pessoa.altura < menorAltura) menorAltura = pessoa.altura;

        if (pessoa.genero === 'Masculino') {
            somaAlturaMasculino += pessoa.altura;
            quantidadeMasculino++;
        }

        if (pessoa.genero === 'Feminino') {
            quantidadeFeminino++;
        }
    });

    
    const mediaAlturaMasculino = quantidadeMasculino > 0 ? (somaAlturaMasculino / quantidadeMasculino) : 0;

    
    document.getElementById('resultado').textContent = `
        Maior altura: ${maiorAltura} cm
        Menor altura: ${menorAltura} cm
        Média de altura dos Masculinos: ${mediaAlturaMasculino.toFixed(2)} cm
        Número de pessoas do gênero Feminino: ${quantidadeFeminino}
    `;
}


document.getElementById('formDados').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const altura = parseFloat(document.getElementById('altura').value);
    const genero = document.getElementById('genero').value;

    if (isNaN(altura) || !genero) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    pessoas.push({ altura, genero });

    
    document.getElementById('altura').value = '';
    document.getElementById('genero').value = '';

    atualizarResultados();
});
