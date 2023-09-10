const sablesDefectuosos = sables => sables.filter(energia => energia < 0).length;
const sablesEnergia = [2, 4, -8, 5, -6];
console.log(`La cantidad de sables defectuosos con energía negativa fue de ${sablesDefectuosos(sablesEnergia)}.`);