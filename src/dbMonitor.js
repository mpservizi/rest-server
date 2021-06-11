/**
 * Connessione a database access e query sql scritte a mano
 */
const path = require("path");
const DbManger = require("./lib/db-manager");
const model = require("./models/Stati.js");
const DB_FOLDER = process.env.DB_CICLATURA_FOLDER;
let dbPath1 = path.join(DB_FOLDER, "CiclatureDB_Movicon1.mdb");
let dbPath2 = path.join(DB_FOLDER, "CiclatureDB_Movicon2.mdb");

let dbm1, dbm2;

function initDatabase() {
  dbm1 = new DbManger();
  if (!dbm1.init(dbPath1)) {
    console.log("Errore apertura database 1");
    return false;
  }

  dbm2 = new DbManger();
  if (!dbm2.init(dbPath2)) {
    console.log("Errore apertura database 2");
    return false;
  }

  return true;
}

async function leggiDb() {
  let result = {};
  try {
    let db1 = new model(dbm1);
    let db2 = new model(dbm2);
    let dati1 = await db1.find();
    let dati2 = await db2.find();

    let allDati = [...dati1, ...dati2];
    allDati.forEach((item) => {
      let key = item.Macchina;
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
    });
  } catch (e) {
    console.log(e);
    result = null;
  }
  return result;
}

module.exports = {
  initDatabase,
  leggiDb,
};

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}
