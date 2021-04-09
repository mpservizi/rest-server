// const ModelTabella = require('./../models/TestRequst');
const RouteFactory = require("./Factory");
const Modello = require("../models/FileModel");
const NomiTabelle = require("./../database/Tabelle").NomiTabelle;
let ModelTabella = new Modello(NomiTabelle.TestRequests);

let router = RouteFactory.creaRouter(ModelTabella);
module.exports = router;
