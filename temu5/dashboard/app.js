const express = require("express");
const bodyParser = require("body-parser");
const penjualanRoutes = require('./routes/penjualanRoutes');

const app = express();
const PORT = 3000;

app.use (bodyParser.json());
app.use ('/penjualan', penjualanRoutes);

app.get('/', (req,res) => {
  res.send('aplikasi Penjualan sederhana - mvc(model Array)');
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});