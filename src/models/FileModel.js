/**
 * Wrapper mongoose model per file database
 */
const FileDb = require("./../database/file-db");
class Modello {
  constructor(nomeFile) {
    this.tabella = nomeFile;
  }
  /**
   * Find all
   * @returns Array
   */
  async find() {
    let dati = await FileDb.load(this.tabella);
    return dati ? dati : [];
  }
  /**
   *
   * @param {String} id
   * @returns Object
   */
  async findById(id) {
    let dati = await FileDb.load(this.tabella);
    let itemRicerca;
    if (dati) {
      itemRicerca = dati.find((item) => item._id == id);
    }
    return itemRicerca ? itemRicerca : null;
  }
  /**
   *
   * @param {Object} payload
   * @returns Object
   */
  async create(payload) {
    //Se non contiene campo _id, genero nuovo id
    if (!payload._id) {
      payload._id = this.tabella + "-" + new Date().getTime();
    }
    let dati = await FileDb.load(this.tabella);
    dati.push(payload);
    let esito = await FileDb.save(this.tabella, dati);
    return esito ? payload : null;
  }
  /**
   *
   * @param {Object} criteria : { _id: input._id }
   * @param {Object} payload : {...}
   * @param {Object} params : {new: true}
   * @returns Object
   */
  async findOneAndUpdate(criteria, payload, params) {
    let dati = await FileDb.load(this.tabella);
    let posItem = dati.map((o) => o._id).indexOf(criteria._id);
    let esito = false;
    if (posItem > -1) {
      dati[posItem] = payload;
      esito = await FileDb.save(this.tabella, dati);
    }
    return esito ? payload : null;
  }
  /**
   *
   * @param {Object} criteria : { _id: input._id }
   * @returns Object
   */
  async deleteOne(criteria) {
    let dati = await FileDb.load(this.tabella);
    let posItem = dati.map((o) => o._id).indexOf(criteria._id);
    if (posItem > -1) {
      let newdati = dati.splice(posItem, 1);
      console.log(newdati);
      let esito = await FileDb.save(this.tabella, dati);
      if (esito) {
        return newdati;
      }
    }
    return null;
  }
}

module.exports = Modello;
