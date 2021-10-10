document.getElementById("Liberar").addEventListener("click", LibrerarMesas);
document.getElementById("Finalizar").addEventListener("click", FinalizarReserva);

function LibrerarMesas() {
    var imagens = document.getElementsByTagName("img");

    for (var cont in imagens) {
        if (imagens[cont].name == "MesaEscolhida") {
            imagens[cont].src = "img/MesaLivre.png ";
            imagens[cont].name = "MesaLivre";
        }
    }
}

function VerificarMesas(name, id) {
    if (name == "MesaLivre") {
        OcuparMesas(id);
    } else {
        (name == "MesaOcupada"); {
            alert("A mesa está Ocupada!");
        }
    }
}

$("#MesaIndisponivel").addClass("MesaIndisponivel");

function OcuparMesas(id) {
    document.getElementById(id).src = "img/MesaEscolhida.png ";
    document.getElementById(id).name = "MesaEscolhida";
}

function FinalizarReserva() {
    debugger;
    var imagens = document.getElementsByTagName("img");

    for (var cont in imagens) {
        if (imagens[cont].name == "MesaEscolhida") {
            imagens[cont].src = "img/MesaOcupada.png";
            imagens[cont].name = "MesaOcupada";
        }
    }
}




$("#formulario").submit(function () {
    alert("A solicitação de agendamento foi enviada com sucesso!");
});
