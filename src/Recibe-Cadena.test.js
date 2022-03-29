import Calculador from "./Calcular-Cadena.js";

describe("Calculadora de Cadenas", () => {
  it("Toma en cuenta la cadena vacía: Para una cadena “” -> 0", () => {
    //Arange
    const cal = new Calculador();
    //Act
    const result = cal.sumar_cadena("", "");
    //Assert
    expect(result).toEqual(0);
  });

  it("Deberia tomar en cuenta cadena con 1 solo numero", () => {
    const cal = new Calculador();
    const result = cal.sumar_cadena("1", "");
    expect(result).toEqual(1);
  });

  it("Toma en cuenta cadena un solo número: Para una cadena “9” -> 9", () => {
    const cal = new Calculador();
    const result = cal.sumar_cadena("9", "");
    expect(result).toEqual(9);
  });

  it("Deberia tomar en cuenta cadena por defecto con 2 numeros", () => {
    const cal = new Calculador();
    const result = cal.sumar_cadena("4,5", "");
    expect(result).toEqual(9);
  });

  it("Toma en cuenta cadena con varios números: Para una cadena “1,3,6,18” -> 28", () => {
    const cal = new Calculador();
    const result = cal.sumar_cadena("1,3,6,18", "");
    expect(result).toEqual(28);
  });

  it("calcular suma para cualquier cadena", () => {
    const cal = new Calculador();
    const result = cal.sumar_cadena("1-2,3", "");
    expect(result).toEqual(6);
  });

  it("calcular suma de una cadena con un delimitador por defecto", () => {
    const cal = new Calculador();
    const result = cal.sumar_cadena("6;7;4", ";");
    expect(result).toEqual(17);
  });

  it("calcular suma de una cadena con un delimitador por defecto ... con 1 numero mayor a 1000", () => {
    const cal = new Calculador();
    const result = cal.sumar_cadena("2, 1001", "");
    expect(result).toEqual(2);
  });

  it("calcular suma de una cadena con un delimitador por defecto ... con 1 numero mayor a 1000", () => {
    const cal = new Calculador();
    const result = cal.sumar_cadena("700, 100000,5000", "");
    expect(result).toEqual(700);
  });

  it("calcular suma de una cadena con un delimitador de cualquier longitud ", () => {
    const cal = new Calculador();
    const result = cal.sumar_cadena("1***2***3", "***");
    expect(result).toEqual(6);
  });

  it("calcular suma de una cadena con un delimitador de cualquier longitud ", () => {
    const cal = new Calculador();
    const result = cal.sumar_cadena("400*1*3", "*");
    expect(result).toEqual(404);
  });
});
