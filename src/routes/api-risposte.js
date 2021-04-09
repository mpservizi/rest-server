function jsonResponse(res, dati) {
    let json = JSON.stringify(dati);
    res.send(json);
};

module.exports = {
    jsonResponse
}