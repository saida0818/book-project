const express = require('express') 
const BookRouter = express.Router() 
const Book = require("../models/Book");

BookRouter.get('/', async (req, res) => { 
    const books = await Book.find()
    console.log(books) 
    res.json({status:200, books})
}) 

BookRouter.get('/:id', (req, res) => { 
    //res.send(`book ${req.params.id}`) 
    Book.findById(req.params.id, (err, book) => { 
        if(err) throw err; 
        res.json({ status: 200, book}) 
    })    
})

BookRouter.put('/:id', (req, res) => { 
   // res.send(`book ${req.params.id} updated`) 
   Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, book) => { 
       if(err) throw err; 
       res.json({ status: 204, msg: `book ${req.params.id} updated in db !`, book}) 
    })   
})

BookRouter.delete('/:id', (req, res) => { 
    // res.send(`book ${req.params.id} updated`) 
    Book.findByIdAndRemove(req.params.id, (err, book) => { 
        if(err) throw err; 
        res.json({ status: 204, msg: `book ${req.params.id} removed in db !`}) 
     })   
 })

BookRouter.post('/', (req, res) => { 
    console.log(`name: ${req.body.title}`) 
    Book.findOne({ title: req.body.title, release: req.body.release }, async (err, book) => {
        if(err) throw err; 
        if(!book){
            const newBook = new Book(req.body); 
            await newBook.save().then( () => { 
                res.json({ status: 201, msg: 'new book created in db !', newBook}) 
            }) 
        }else{ 
            const msg = 'this book already exists in db !' 
            console.log(msg) 
            res.json({ status: 204, msg}) 
        } 
    }) 
})


module.exports = BookRouter