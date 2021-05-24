const router = require("express").Router();
const datiCiclaturaRouter = require("./dati-ciclatura");
const testRequestRouter = require("./test-request");
const risorseRouter = require("./risorse");
//const monitorCiclatureRouter = require("./monitor-ciclature");
//Custom router diverso da altri metodi
const monitorCiclatureRouter = require("./monitor-router");

router.get("/", function (req, res, next) {
  res.send("api routes");
});

router.use("/dati_ciclatura", datiCiclaturaRouter);
router.use("/testrequest", testRequestRouter);
router.use("/risorse", risorseRouter);
router.use("/monitor", monitorCiclatureRouter);
module.exports = router;
