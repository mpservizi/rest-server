const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NOME_TABELLA = 'TestRequests';
const NOME_MODELLO = 'testrequest';

const schema = {
	codiceProgetto: {
		type: String
	},
	titoloProgetto: {
		type: String
	},
	descrizione: {
		type: String
	},
	dataInizio: {
		type: String
	},
	dataFine: {
		type: String
	},
	weekInizio: {
		type: Number
	},
	weekFine: {
		type: Number
	},
	tecnico: {
		type: String
	},
	cliente: {
		type: String
	},
	priority: {
		type: Number
	},
	stato: {
		type: Number
	},
	c1: {
		type: Number
	},
	c2: {
		type: Number
	},
	c3: {
		type: Number
	},
	testProgram:{
		type: Array
	}
};

let modello = new Schema(
	schema,
	{ collection: NOME_TABELLA }
);

module.exports = mongoose.model(NOME_MODELLO, modello);