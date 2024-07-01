export default class Calculadora {
    multiplicar(a, b) {
      return a * b;
    }
  
    dividir(a, b) {
      if (b === 0) {
        throw new Error("No se puede dividir entre cero");
      }
      return a / b;
    }
  }