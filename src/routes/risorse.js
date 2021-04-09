// const ModelTabella = require('./../models/Risorse');
const RouteFactory = require("./Factory");

const Modello = require("../models/FileModel");
const NomiTabelle = require("./../database/Tabelle").NomiTabelle;
let ModelTabella = new Modello(NomiTabelle.Risorse);

let router = RouteFactory.creaRouter(ModelTabella);
module.exports = router;
