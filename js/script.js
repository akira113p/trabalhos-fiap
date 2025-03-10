function somar() {
    n1 = parseFloat(document.getElementById("txtN1").value)
    n2 = parseFloat(document.getElementById("txtN2").value)
    A = n1 + n2
    document.getElementById("resposta").innerHTML = `à soma é ${A}`


}
function subtrair() {
    n1 = parseFloat(document.getElementById("txtN1").value)
    n2 = parseFloat(document.getElementById("txtN2").value)
    B = n1 - n2
    document.getElementById("resposta").innerHTML = `à soma é ${B}`
}



function multiplicar() {
    n1 = parseFloat(document.getElementById("txtN1").value)
    n2 = parseFloat(document.getElementById("txtN2").value)
    C = n1 * n2
    document.getElementById("resposta").innerHTML = `à soma é ${C}`
}



function dividir() {
    n1 = parseFloat(document.getElementById("txtN1").value)
    n2 = parseFloat(document.getElementById("txtN2").value)
    D = n1 / n2
    document.getElementById("resposta").innerHTML = `à soma é ${D}`
}