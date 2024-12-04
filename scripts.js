let esqButton = document.getElementById("esquerdo")
let dirButton = document.getElementById("direito")
let container = document.querySelector(".container")
let itens = container.querySelectorAll(".lista .item")
let indicadores = document.querySelector(".indicadores")
let modelo = indicadores.querySelectorAll("ul li")
let lista = container.querySelector(".lista")

let ativo = 0
let primeiro = 0
let ultimo = itens.length - 1

function secao() {
    let anterior = container.querySelector(".lista .item.ativo")
    anterior.classList.remove("ativo")
    
    let listaVelha = indicadores.querySelector("ul li.ativo")
    listaVelha.classList.remove("ativo")
    modelo[ativo].classList.add("ativo")

    indicadores.querySelector(".numero").innerHTML = "0" + (ativo + 1)
}
dirButton.onclick = () => {
    lista.style.setProperty('--calculo', 1)
    if(ativo + 1 > ultimo) {
        ativo = 0
    } else {
        ativo = ativo + 1
    }
    secao()
    itens[ativo].classList.add("ativo")

}
esqButton.onclick = () => {
    lista.style.setProperty('--calculo', -1)
    if(ativo - 1 < primeiro) {
        ativo = 2
    } else {
        ativo = ativo - 1
    }
    secao()
    itens[ativo].classList.add("ativo")
}
