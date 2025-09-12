require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
const db = mongoose.connection;
db.on('error', (error) => console.error(error));

app.use(express.json());
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);



app.listen(3000, () => console.log('Server running on port 3000'))