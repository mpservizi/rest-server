/**
 * Gestisce la connessione con il database
 */
require('dotenv').config();
const mongoose = require("mongoose");
const params = {
    user: process.env.DB_USER,
    pwd: process.env.DB_PASS,
    url: process.env.DB_URL,
    db: process.env.DB_NAME
}

let connection;

/**
 * Avvia la connessione con il database
 * @returns {Boolean}: True or false
 */
async function start() {
    connection = await connect(params);
    if (!connection) {
        return false;
    }
    initEventiDb(connection);
    return true;
}

/**
 * Esegue la connesione a database
 * @param {Object} params : parametri per connettesi al db
 * @returns 
 */
async function connect(params) {
    try {
        let uri = `mongodb+srv://${params.user}:${params.pwd}@${params.url}/${params.db}`;
        await mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        return mongoose.connection;
    } catch (error) {
        console.log(error);
    }
    return null
}

/**
 * Imposta i listener per eventi emessi dal database
 * @param {Object} db : connection per db
 */
function initEventiDb(db) {
    //Quando si verifica un errore dopo l'apertura del database
    db.on('error', function (err) {
        console.log('Errore connessione');
        console.log(err);
    });

}

module.exports = start