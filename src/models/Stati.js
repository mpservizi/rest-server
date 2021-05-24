class ModelStati {
  constructor(db) {
    this.db = db;
  }
  async find() {
	const QR_STATI = `SELECT Macchina, Stallo, Stato, DataInizio, DataFine, LocalCol FROM Stati_Stalli`;
    let dati = await this.db.select(QR_STATI);
    let result = [];
	let keys = [];
	dati.forEach(item=>{
		if(item.Macchina==null || item.Macchina=="") return
		let key = item.Macchina + "_" + item.Stallo;
		if(!keys.includes(key)){
			result.push(item);
			keys.push(key);
		}
	});
	return result;
  }
}

module.exports = ModelStati;
