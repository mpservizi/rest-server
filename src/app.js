const startWebServer = require("./server");
// const startDbServer = require('./database/db-server');
avvio();

async function avvio() {
  await startWebServer();
  //await startDbServer();
}
