function adicionaritem(){
    //Criando o input
    const input = document.querySelector("input")
    const texto = input.value

    //Cria novo item 
   const novoitem = document.createElement("li")
    novoitem.textContent = texto
    
    //cria um botao dentro do novo item pra exclui
    const botao = document.createElement("button");
    botao.textContent = "X";
    botao.onclick = function(){
        novoitem.remove();
    }
    novoitem.appendChild(botao)

    //manda tudo pra lista
    const lista = document.getElementById("lista")
    lista.appendChild(novoitem)
    
    
    //deixa a caixa de item vazia
    input.value = ""

}
function salvarLista() {
    const lista = document.getElementById("lista");
    const itens = [];

    // Percorre todos os <li> da lista, pega só o texto (sem o botão)
    lista.querySelectorAll("li").forEach(li => {
        // O texto do item está no conteúdo do li, menos o botão
        // Como o texto do botão é "X", podemos remover ele do texto
        // Ou pegar só o texto do primeiro filho (assumindo que seja um <span> ou texto simples)
        // Mas no seu código, texto e botão estão juntos, então vamos pegar só o texto removendo o botão:
        
        // Uma forma simples: pegar o texto sem o botão:
        const textoItem = li.firstChild.textContent; 
        itens.push(textoItem);
    });

    // Salva o array como JSON no localStorage
    localStorage.setItem("listaDeItens", JSON.stringify(itens));
}

// Função para carregar lista do localStorage
function carregarLista() {
    const lista = document.getElementById("lista");
    const itensSalvos = JSON.parse(localStorage.getItem("listaDeItens"));

    if (itensSalvos) {
        itensSalvos.forEach(texto => {
            const novoitem = document.createElement("li");
            
            // Criar um span para o texto
            const span = document.createElement("span");
            span.textContent = texto;

            // Criar botão de excluir
            const botao = document.createElement("button");
            botao.textContent = "X";
            botao.onclick = function () {
                novoitem.remove();
                salvarLista();  // Atualiza o localStorage ao remover
            };

            novoitem.appendChild(span);
            novoitem.appendChild(botao);
            lista.appendChild(novoitem);
        });
    }
}
function menuShow() {
 const conteudo = document.getElementById('sidebar');
    if (conteudo.style.display === 'none') {
      conteudo.style.display = 'block';
    } else {
      conteudo.style.display = 'none';
    }
  }
function closemenu(){
  const conteudo = document.getElementById('sidebar');
  if(conteudo.style.display === 'block'){
  conteudo.style.display = 'none';}
}
