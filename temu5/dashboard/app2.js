const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


let products = [];

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: true }));

// --- HALAMAN STATIS ---
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/tambah', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'tambah.html'));
});

app.get('/list', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'list.html'));
});

app.post('/list', (req, res) => {
  const { nama, harga, stok } = req.body;
  products.push({ id:products.length+1,nama, harga, stok });
  res.redirect('/list.html');
});


app.get('/api/products', (req, res) => {
  res.json(products);
});


app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});