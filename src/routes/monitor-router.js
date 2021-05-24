const router = require("express").Router();
const ApiRisposte = require("./api-risposte");
const DbMonitor = require("./../dbMonitor");

router.get("/", async function (req, res, next) {
  let dati = await DbMonitor.leggiDb();
  ApiRisposte.jsonResponse(res, dati);
});

module.exports = router;
