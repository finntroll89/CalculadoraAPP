
let oddCount = 4;

function adicionarOdd() {
    oddCount++;

    const oddsTable = document.getElementById('oddsTable');

    const newRow = document.createElement('tr');
    const newOddCell = document.createElement('td');
    newOddCell.innerHTML = `<span class="odd-number">${oddCount}°</span> <input type="text" class="odd" step="0.01" oninput="calcularDutching(); formatOddInput(this)">`;
    
    const newInvestimentoCell = document.createElement('td');
    newInvestimentoCell.className = 'investimento';

    const newRetornoCell = document.createElement('td');
    newRetornoCell.className = 'retorno';

    newRow.appendChild(newOddCell);
    newRow.appendChild(newInvestimentoCell);
    newRow.appendChild(newRetornoCell);

    oddsTable.appendChild(newRow);
}

function calcularDutching() {
    let investimentoTotal = parseFloat(document.getElementById('investimento').value.replace(/\./g, '').replace(',', '.'));
    if (isNaN(investimentoTotal) || investimentoTotal <= 0) return;

    let odds = document.querySelectorAll('.odd');
    let totalProbabilidade = 0;
    let totalInvestimento = 0;
    let totalRetorno = 0;
    let oddsValidas = false;

    // Calcular a probabilidade total
    odds.forEach((oddInput) => {
        let odd = parseFloat(oddInput.value.replace(",", "."));
        if (!isNaN(odd) && odd > 0) {
            totalProbabilidade += 1 / odd;
            oddsValidas = true;
        }
    });

    // Se não houver odds válidas, limpar os resultados e sair da função
    if (!oddsValidas) {
        document.getElementById('lucro').innerHTML = '';
        document.getElementById('retorno').innerHTML = '';
        return;
    }

    // Calcular o investimento e retorno para cada odd
    odds.forEach((oddInput) => {
        let odd = parseFloat(oddInput.value.replace(",", "."));
        if (isNaN(odd) || odd <= 0) {
            oddInput.parentElement.nextElementSibling.innerHTML = '';
            oddInput.parentElement.nextElementSibling.nextElementSibling.innerHTML = '';
            return;
        }

        let probabilidade = 1 / odd;
        let investimento = (investimentoTotal * probabilidade) / totalProbabilidade;
        let retorno = investimento * odd;
        
        totalInvestimento += investimento;
        totalRetorno = retorno;  // O retorno será o mesmo para todas as odds no dutching

        oddInput.parentElement.nextElementSibling.innerHTML = investimento.toFixed(2);
        oddInput.parentElement.nextElementSibling.nextElementSibling.innerHTML = retorno.toFixed(2);
    });

    let lucro = totalRetorno - investimentoTotal;

    document.getElementById('lucro').innerHTML = lucro >= 0 ? `Lucro: R$ ${lucro.toFixed(2)}` : `Perda: R$ ${lucro.toFixed(2)}`;
    document.getElementById('lucro').className = lucro >= 0 ? 'result profit' : 'result loss';
    document.getElementById('retorno').innerHTML = `Retorno total: R$ ${totalRetorno.toFixed(2)}`;
}

function formatOddInput(input) {
    let value = input.value.replace(/[^\d]/g, ''); // Remove qualquer coisa que não seja número
    let floatValue = parseFloat(value) / 100; // Converte o valor em decimal
    input.value = isNaN(floatValue) ? '' : floatValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatInvestimento(input) {
    let value = input.value.replace(/[^\d]/g, ''); // Remove tudo que não seja número
    let intValue = parseFloat(value) / 100; // Divide por 100 para garantir a vírgula automática
    input.value = intValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    calcularDutching(); // Atualiza os cálculos
}

document.querySelectorAll('.odd').forEach(input => {
    input.addEventListener('input', function() {
        formatOddInput(this); // Aplica a formatação quando o usuário digitar
        calcularDutching(); // Recalcula o dutching após a formatação
    });
});

function reiniciarCalculadora() {
    document.getElementById('investimento').value = "0";
    document.querySelectorAll('.odd').forEach(input => {
        input.value = '';
        input.parentElement.nextElementSibling.innerHTML = '';
        input.parentElement.nextElementSibling.nextElementSibling.innerHTML = '';
    });
    document.getElementById('lucro').innerHTML = '';
    document.getElementById('retorno').innerHTML = '';
}

function copyToClipboard(elementId) {
    // Obtém o texto da tag <p> sem incluir o botão
    var text = document.getElementById(elementId).childNodes[0].nodeValue.trim();
    navigator.clipboard.writeText(text).then(function() {
        alert('Texto copiado: ' + text);
    }, function() {
        alert('Erro ao copiar o texto.');
    });
}