function openMenu() {
    document.getElementById("Menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeMenu() {
    document.getElementById("Menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function selecionarCidade(select) {
    var valorSelecionado = select.value;
    var cidade = valorSelecionado.split("|")[1];
    document.getElementById("cidade").value = cidade;
}

