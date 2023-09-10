function calcularDistacia(coordenadaXUno, coordenadaXDos, coordenadaYUno, coordenadaYDos) {
    return Math.sqrt((Math.pow ((coordenadaXDos - coordenadaXUno), 2)) + Math.pow((coordenadaYDos - coordenadaYUno),2));
}

    let distanciaCalculada = calcularDistacia(232,343,21,24);
    console.log(distanciaCalculada);