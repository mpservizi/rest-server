const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NOME_TABELLA = 'Risorse';
const NOME_MODELLO = 'risorsa';

const schema = {
	label: {
		type: String
	},
	idMacchina: {
		type: Number
	},
	_id: {
		type: Number
	}
};

let modello = new Schema(
	schema,
	{ collection: NOME_TABELLA }
);

module.exports = mongoose.model(NOME_MODELLO, modello);