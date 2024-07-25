function valida()
{
    let nome = getObj("nome");
    if (vazio(nome))
    {
        alert("Informe o nome.");
        nome.focus();
        return false;
    }

    let email = getObj("email");
    if (vazio(email))
    {
        alert("Informe o email.");
        email.focus();
        return false;
    }

    let dtNascimento = getObj("dtNascimento");
    if (vazio(dtNascimento))
    {
        alert("Informe a data de nascimento.");
        dtNascimento.focus();
        return false;
    }

    let senha1 = getObj("senha1");
    if (vazio(senha1))
    {
        alert("Informe a senha.");
        senha1.focus();
        return false;
    }

    let senha2 = getObj("senha2");
    if (vazio(senha2))
    {
        alert("Confirme a senha.");
        senha2.focus();
        return false;
    }

    if (senha1.value != senha2.value)
    {
        alert("As senhas não são iguais.");
        senha2.focus();
        return false;
    }

    let termo = getObj("termo");
    if (!termo.checked)
    {
        alert("É necessário aceitar os termos e condições.");
        termo.focus();
        return false;
    }

   return true;
}

function cadastrar()
{
    if (valida())
    {
        alert("Cadastro efetuado com sucesso!");
        location.replace("../html/login.html");
    }
}