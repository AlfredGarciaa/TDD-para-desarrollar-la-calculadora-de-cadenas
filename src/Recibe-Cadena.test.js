describe("Calculadora de Cadenas", () => {
  it("Toma en cuenta la cadena vacía: Para una cadena “” -> 0", () => {
    expect(sumar_cadena("")).toEqual(0);
  });

  it("Deberia tomar en cuenta cadena con 1 solo numero", () => {
    expect(sumar_cadena("1")).toEqual(1);
  });
});



function sumar_cadena(cadena){
  if(cadena == ""){
    return 0;
  }
  return parseInt(cadena);
}
