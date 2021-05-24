const ADODB = require("node-adodb");
ADODB.debug = true;
const fs = require("fs");

/**
 * Inizializza la connessione con il database
 * @param {String} dbPath : percorso del dataabse
 * @returns {Object} connessione al database. Null in caso di errore
 */
// let provider = "Microsoft.Jet.OLEDB.4.0"; //.mdb
let provider = "Microsoft.ACE.OLEDB.12.0"; //.accdb office 2010
function openConnection(dbPath) {
  let conStr =
    "Provider=" +
    provider +
    ";Data Source=" +
    dbPath +
    ";Persist Security Info=False;";
  // console.log(conStr);
  try {
    if (!fs.existsSync(dbPath)) {
      console.log("Percorso database non valido : " + dbPath);
      return null;
    }
    //In caso di driver a 64 bit passare true come secondo parametro
    let connection = ADODB.open(conStr, true);
    return connection;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Esegue la funzione di querry su database
 * @param {Object} connection : database connection
 * @param {String} sql : testo sql
 * @param {Boolean} execute : Indica se eseguite metodo con execute invece di querry
 * @returns {Array} : in caso di execute array è vuoto
 */
async function eseguiFunzione(connection, sql, execute) {
  try {
    let result = null;
    if (execute) {
      await connection.execute(sql);
      result = { result: "OK" };
    } else {
      result = await connection.query(sql);
    }
    return result;
  } catch (error) {
    console.error(JSON.stringify(error));
    // console.error(error);
    return null;
  }
}

/**
 * Classe wrapper per gestione database
 */
class DbManager {
  constructor() {}
  /** Inizializza la connessione
   * @param {dbPath}  :percorso del database
   * @returns {boolean} : true in caso di successo
   */
  init(dbPath) {
    this.connection = openConnection(dbPath);
    return this.connection != null;
  }
  async select(sql) {
    return eseguiFunzione(this.connection, sql);
  }
  async insert(sql) {
    return eseguiFunzione(this.connection, sql, true);
  }
  async update(sql) {
    return eseguiFunzione(this.connection, sql, true);
  }
  async delete(sql) {
    return eseguiFunzione(this.connection, sql, true);
  }
}

module.exports = DbManager;
