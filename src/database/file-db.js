/**
 * Paramteri dei file usati come database
 */
const Mydb = require("./Tabelle");
const fs = require("fs").promises;

async function load(nomeTabella) {
  try {
    let objTab = Mydb.Tabelle[nomeTabella];
    let percorso = objTab.path;
    let testo = await fs.readFile(percorso, "utf-8");
    let dati = JSON.parse(testo);
    return dati;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function save(nomeTabella, dati) {
  try {
    let objTab = Mydb.Tabelle[nomeTabella];
    let percorso = objTab.path;
    let json = JSON.stringify(dati);
    await fs.writeFile(percorso, json);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  save,
  load,
};
