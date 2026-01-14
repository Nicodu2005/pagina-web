const express = require("express");
const cors = require("cors");
require ("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/User", require("./routes/AuthIniciarsesion"));
app.use("/User", require("./routes/AuthRegistrarse"));
app.use("/home",require("./routes/Product"));


app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT} `);
});