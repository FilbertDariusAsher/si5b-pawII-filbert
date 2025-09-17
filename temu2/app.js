const express = require('express');
const app = express();
const port = 3000;  

// 1. layanin file statis dari folder 'public'
app.use(express.static('public'));

// 2. route tambahan opsional
app.get('/', (req, res) => {
  res.sendFile('<h1>tentang kami</h1> <p>ini adalah halaman tentang kami</p>');
});

// 3. jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});