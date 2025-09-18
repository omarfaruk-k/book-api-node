const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    
     const books = [
        { id: 1, title: 'Book One', author: 'Author A' },
        { id: 2, title: 'Book Two', author: 'Author B' }
    ];
    res.json(books);
})

router.get('/:id', (req,res) => {
    
    
})

router.post('/', (req,res) => {
    
    
})

router.patch('/:id', (req,res) => {
    
    
})

router.delete('/:id', (req,res) => {
    
    
})



module.exports = router;