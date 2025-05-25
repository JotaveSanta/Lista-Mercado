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

