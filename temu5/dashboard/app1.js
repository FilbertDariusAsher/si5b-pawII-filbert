const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let product = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/minimarket', (req, res) => {
    res.render('minimarket', { product });  
});

app.get("/add", (req, res) => {
    res.render("form");
});

app.post("/add", (req, res) => {
    const { name, qty, price } = req.body;
    product.push({ name, qty: parseInt(qty), price: parseInt(price) });
    res.redirect("/minimarket");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});