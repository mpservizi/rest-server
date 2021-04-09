// const ModelTabella = require('./../models/DatiCiclatura');
const RouteFactory = require("./Factory");

const Modello = require("../models/FileModel");
const NomiTabelle = require("./../database/Tabelle").NomiTabelle;
let ModelTabella = new Modello(NomiTabelle.TaskCiclatura);

let router = RouteFactory.creaRouter(ModelTabella);
module.exports = router;
