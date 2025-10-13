import express from 'express';
import dotenv from 'dotenv';
import db from '../config/db.js';

dotenv.config();
db();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})