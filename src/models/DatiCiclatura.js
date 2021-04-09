const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NOME_TABELLA = 'TaskCiclatura';
const NOME_MODELLO = 'tasks';

const schema = {
	_id:{
		type:String
	},
	eventi: {
		type: Array
	},
};

let modello = new Schema(
	schema,
	{ collection: NOME_TABELLA }
);

module.exports = mongoose.model(NOME_MODELLO, modello);