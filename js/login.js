function valida()
{
    let email = getObj("email");
    if (vazio(email))
    {
        alert("Informe o email.");
        email.focus();
        return false;
    }

    let senha = getObj("senha");
    if (vazio(senha))
    {
        alert("Informe a senha.");
        senha.focus();
        return false;
    }
   return true;
}

function entrar()
{
    if (valida())
    {
        location.replace("../html/home.html");
    }
}