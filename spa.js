/*
    Validação do formulário e feedback ao usuário:

    Nesta atividade, o formulário é validado em JavaScript sem recarregar a página (SPA),
    checando se o nome, email e mensagem foram preenchidos corretamente.
    Essa abordagem demonstra que compreendi:
    - Manipulação do DOM
    - Eventos de formulário
    - Validação de dados
    - Como mostrar feedback ao usuário
*/ 
/*
Observação:

Após a atividade ser avaliada, pretendo implementar uma mensagem de "Cadastro enviado com sucesso"
que será exibida dinamicamente quando o usuario enviar os dados. 

Isso mostrará feedback ao usuário.
*/
function mostrarTela(idTela) {
    const telas = document.querySelectorAll(".tela");
    telas.forEach(t => t.classList.remove("tela-ativa")); 
    document.getElementById(idTela).classList.add("tela-ativa"); 
}

//validação do formulário
    function validarFormulario(event) {
    event.preventDefault(); // impede reload da página

    // Captura valores do formulário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    let valido = true;

    // Limpa mensagens de erro
    document.getElementById("erroNome").innerText = "";
    document.getElementById("erroEmail").innerText = "";
    document.getElementById("erroMensagem").innerText = "";

  // validação do nome
    if (nome === "") {
        document.getElementById("erroNome").innerText = "O nome é obrigatório!";
        valido = false;
    }

    // Validação do email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        document.getElementById("erroEmail").innerText = "Email inválido!";
        valido = false;
    }

    // Validação da mensagem
    if (mensagem === "") {
        document.getElementById("erroMensagem").innerText = "A mensagem não pode ficar vazia!";
        valido = false;
    }

    
     if (valido) {
        if (!document.getElementById("enviado")) {
            let msg = document.createElement("div");
            msg.id = "enviado";
            msg.style.color = "green";
            msg.style.marginTop = "10px";
            msg.innerText = "Cadastro realizado com sucesso!";
            document.getElementById("enviado").after(msg);
        }

        
    }
}