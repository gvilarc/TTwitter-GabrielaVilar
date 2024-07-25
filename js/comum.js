function getObj(id)
{
    return document.getElementById(id);
}

function alternaExibirSenha(obj)
{
    obj.type = (obj.type == "password" ? "text" : "password");
}

function vazio(obj)
{
    return (obj.value == "");
}