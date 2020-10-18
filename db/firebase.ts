const firebase = require("firebase-admin"),
  serviceAccount = require("../static/perfanalyzerapi.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://perfanalyzerapi.firebaseio.com",
});

const db = firebase.database();

export default db;
