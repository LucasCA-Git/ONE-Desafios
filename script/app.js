// Array para armazenar os nomes dos amigos
const amigos = [];

// Função para adicionar um ou mais nomes à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomes = input.value.trim(); // Remove espaços em branco extras

    if (nomes === "") {
        alert("Por favor, insira um nome ou nomes válidos!");
        return;
    }

    // Divide os nomes com base na vírgula e remove espaços extras em cada nome
    const nomesSeparados = nomes.split(',').map(nome => nome.trim()).filter(nome => nome !== "");

    if (nomesSeparados.length === 0) {
        alert("Por favor, insira um nome válido!");
        return;
    }

    // Adiciona os nomes ao array de amigos
    amigos.push(...nomesSeparados);

    // Atualiza a lista na tela
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista visível na página
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista antes de renderizar novamente

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`; // Exibe os nomes com índice
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione ao menos um amigo antes de sortear.");
        return;
    }

    // Sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
