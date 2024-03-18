import express from "express";
import adminroutes from "./routes/adminroutes.js";
import cors from "cors";
import bodyParser from "body-parser";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

const app = express();
// Intialize the firebase-admin project/account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var jsonParser = bodyParser.json();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminroutes);

// connectDb();
let prot = 4000;
app.listen(prot, () => {
  console.log(`server is running on port ${4000}`);
});
