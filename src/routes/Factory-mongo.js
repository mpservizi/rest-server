/**
 * Crea routes per tabelle usando Mongodb
 */
const ApiRisposte = require("./api-risposte");

function creaRouter(ModelTabella) {
  const router = require("express").Router();
  //Get all
  router.get("/", async function (req, res, next) {
    let dati = await ModelTabella.find({}).lean();
    ApiRisposte.jsonResponse(res, dati);
  });
  //get by id
  router.get("/:id", async function (req, res, next) {
    let id = req.params.id;
    let dati = await ModelTabella.findById(id).lean();
    ApiRisposte.jsonResponse(res, dati);
  });
  //Add new request
  router.post("/", async function (req, res, next) {
    let input = req.body;
    let dati = await ModelTabella.create(input);
    ApiRisposte.jsonResponse(res, dati);
  });
  //Update request
  router.put("/", async function (req, res, next) {
    let input = req.body;
    let dati = await ModelTabella.findOneAndUpdate({ _id: input._id }, input, {
      new: true,
    });
    ApiRisposte.jsonResponse(res, dati);
  });
  //Delete request
  router.delete("/", async function (req, res, next) {
    let input = req.body;
    let dati = await ModelTabella.deleteOne({ _id: input._id });
    ApiRisposte.jsonResponse(res, dati);
  });

  return router;
}

module.exports = {
  creaRouter,
};
