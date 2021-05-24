async function leggiDb() {
  let dati = [
    {
      Macchina: "L180",
      Stallo: 1,
      Start: "09/04/2021 07:50",
      End: "15/04/2021 17:50",
      Stato: 1,
      Timestamp: "12/04/2021 13:50",
    },
    {
      Macchina: "L180",
      Stallo: 2,
      Start: "09/04/2021 07:51",
      End: "15/04/2021 17:51",
      Stato: 3,
      Timestamp: "12/04/2021 13:51",
    },
  ];

  return delay(1000, dati);
}

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

module.exports = {
  leggiDb,
};
