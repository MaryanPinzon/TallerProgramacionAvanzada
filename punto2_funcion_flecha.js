const limpiarDatos = codigo => {
    let resultado = codigo.split(":")[1];
    return resultado;
}

    let datoLimpiado = limpiarDatos("ARQ123:MARYAN PINZON");
    console.log(datoLimpiado);