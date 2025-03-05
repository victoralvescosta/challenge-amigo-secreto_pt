//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços em branco no início e no fim

    // Validação: verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Sai da função se o campo estiver vazio
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = "";

    // Atualiza a lista de amigos exibida na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada amigo do array à lista
    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear os amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    // Embaralha o array de amigos
    const amigosEmbaralhados = [...amigos].sort(() => Math.random() - 0.5);

    // Cria pares de amigos secretos
    const resultado = [];
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigoAtual = amigosEmbaralhados[i];
        const amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length]; // O último será par do primeiro
        resultado.push(`${amigoAtual} tirou ${amigoSecreto}`);
    }

    // Exibe o resultado na tela
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ""; // Limpa o resultado anterior
    resultado.forEach(item => {
        const itemLista = document.createElement('li');
        itemLista.textContent = item;
        resultadoElement.appendChild(itemLista);
    });
}

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    input.value = ""; // Limpa o campo de entrada
    atualizarListaAmigos(); // Atualiza a lista na tela
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // 1. Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return; // Sai da função se o array estiver vazio
    }

    // 2. Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obter o nome sorteado
    const nomeSorteado = amigos[indiceAleatorio];

    // 4. Mostrar o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;
}