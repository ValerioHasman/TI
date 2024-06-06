export default class Saudacao {

  static apresentarEmURI() {
    return encodeURIComponent(`Olá, Valério, ${ Saudacao.saudar() }.\n`);
  }

  static saudar(){
      const hora = new Date().getHours();
      if (hora < 5) {
        return "boa noite 💤";
      }
      if (hora < 12) {
        return "bom dia";
      }
      if (hora < 18) {
        return "boa tarde";
      }
      return "boa noite";
  }
}
