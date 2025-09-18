const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req,res) => {
    
     try{
        const books = await Book.find()
        res.json(books)
     }catch(err){
        res.status(500).json({message: err.message});
     }

})

router.get('/:id', (req,res) => {
    
    res.send(`Get book with ID ${req.params.id}`);
})

router.post('/', async (req,res) => {
   const book = new Book({
      title: req.body.title,
      author: req.body.author,
      language: req.body.language,
      genre: req.body.genre
   })
   try {
      const newBook = await book.save()
      res.status(201).json(newBook)
   } catch (error) {
      res.status.apply(400).json({message: error.message})
   }
    
})

router.patch('/:id', (req,res) => {
    
    
})

router.delete('/:id', (req,res) => {
    
    
})



module.exports = router;