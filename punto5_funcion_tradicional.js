function calcularSalario(licenciasVendidas) {
    const salarioBase = 3500000;
    const comisionPorLicenciaDeSoftwareVendida = 1500000;
    const deducciones = 0.05;

    let totalDevengado = salarioBase + (licenciasVendidas * comisionPorLicenciaDeSoftwareVendida);
    let salarioFinal = totalDevengado - (totalDevengado * deducciones);

    console.log(`El salario mensual del vendedor es: $${salarioFinal}`);
}

let licencias = 5;
calcularSalario(licencias);