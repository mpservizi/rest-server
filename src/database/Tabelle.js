const path = require("path");
// const DB_FOLDER = path.join(__dirname, "..", "..", "data");
const DB_FOLDER = process.env.DB_FOLDER;
const Mydb = {
  DB_FOLDER: DB_FOLDER,
  Tabelle: {
    Risorse: {
      path: path.join(DB_FOLDER, "Risorse.db"),
    },
    TaskCiclatura: {
      path: path.join(DB_FOLDER, "TaskCiclatura.db"),
    },
    TestRequests: {
      path: path.join(DB_FOLDER, "TestRequests.db"),
    },
    MontiorCiclature: {
      path: path.join(DB_FOLDER, "MonitorCiclature.db"),
    },
  },
  NomiTabelle: {
    Risorse: "Risorse",
    TaskCiclatura: "TaskCiclatura",
    TestRequests: "TestRequests",
    MontiorCiclature: "MontiorCiclature",
  },
};

module.exports = Mydb;
