const temperaturaMedia = (temperaturaMaxima, temperaturaMinima) => (temperaturaMaxima + temperaturaMinima) / 2;
let temperaturaMaxima = 30;
let temperaturaMinima = 10;
console.log(`La temperatura media es de ${temperaturaMedia(temperaturaMaxima, temperaturaMinima)}°C`);