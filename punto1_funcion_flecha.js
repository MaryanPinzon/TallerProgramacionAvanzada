let calcularDistacia = (coordenadaXUno, coordenadaXDos, coordenadaYUno, coordenadaYDos) => Math.sqrt((
    Math.pow ((coordenadaXDos - coordenadaXUno), 2)) + Math.pow((coordenadaYDos - coordenadaYUno),2),2);

    let distanciaCalculada = calcularDistacia(232,343,21,24);
    console.log(distanciaCalculada);