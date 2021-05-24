const startWebServer = require("./server");
const DbMonitor = require("./dbMonitor");
// const startDbServer = require('./database/db-server');
avvio();

async function avvio() {
  if (!DbMonitor.initDatabase()) {
    console.log("Errore inizializzazione databae ciclatura");
    return;
  }
  console.log("Database ciclatura pronto");
  await startWebServer();

  //await startDbServer();
}
