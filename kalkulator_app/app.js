const express = require('express');
const app = express();
const PORT = 3000;

// Data produk di array
const products = [
    { name: 'Kerupuk Kemplang panggang', qty: 1, price: 10000 },
    { name: 'Makaroni',        qty: 1, price: 15000 },
    { name: 'Kerupuk Keriting',        qty: 2, price: 20000 },
    { name: 'Kerupuk Mulyono',       qty: 3, price: 30000 },
];

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/minimarket', (req, res) => {
    res.render('minimarket', { products });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});