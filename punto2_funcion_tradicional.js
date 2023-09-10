function limpiarDatos(codigo){
    let resultado = codigo.split(":")[1]
    return resultado
}

    let resultado = limpiarDatos("ARQ123:MARYAN PINZON")
    console.log(resultado)