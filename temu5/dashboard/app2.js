const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware untuk membaca file statis
app.use(express.static(path.join(__dirname, 'public')));

// Routing ke halaman utama (dashboard)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/input', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'tambah.html'));
});

app.get('/daftar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'daftar.html'));
});
app.post('/tambah', (req, res) => {
  const { nama, harga, stok } = req.body;
  barang.push({ 
    id: barang.length + 1,
    nama, 
    harga: parseInt(harga), 
    stok: parseInt(stok)
});
  res.redirect('/daftar.html');
});
// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});