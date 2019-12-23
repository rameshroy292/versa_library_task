const models = require("../models/book_model.js");

const Books = models.Books;

module.exports = {
    
    listBooks: async (req, res) => {
        try{           
            Books.find({}, (err, books) => {
                if (err) {
                    console.log(err)
                    res.send(err);
                }
                res.json(books);
            });
        }
        catch{
            res.json({
                message: `Contact system admin`
            });
        }
    },

    updateBook: async (req, res) => {
        try{          
            Books.updateOne(
                {bookid : req.body.bookid},{ $set: {name: req.body.name, price: req.body.price, 
                publisher: req.body.publisher, author: req.body.author} }, (err, result) =>{
                    if(err){
                        res.send(err)
                    }else{
                        if (result.nModified != 0) {
                            res.json({
                                message: `Book ID : ${req.body.bookid} successfully updated`
                            });
                        }
                        else{
                            res.json({
                                message: `Book ID : ${req.body.bookid} doesnt exist`
                            });
                        }
                    }
                }
            )
        }
        catch{
            res.json({
                message: `Contact system admin to update book `
            });
        }
    },

    addBooks: async (req, res) => {
        try{
            function randomNumber(min, max) {  
                min = Math.ceil(min); 
                max = Math.floor(max); 
                return Math.floor(Math.random() * (max - min + 1)) + min; 
            }
            var bookid = randomNumber(1, 1000)
            console.log(req)
            Books.findOneAndUpdate({bookid:bookid},{name:req.body.name,publisher:req.body.publisher,
                author:req.body.author, price:req.body.price},{new: true,upsert: true},(err, result) => {
                if (err) {
                    res.send(err);
                }
                else{                
                    res.json({
                        message: `Book : ${req.body.name} added successfully`
                    });            
                }            
            });
        }
        catch{
            res.json({
                message: `Contact system admin to add book `
            });  
        }
    },

    deleteBook: async (req, res) =>{
        try{
            Books.deleteMany({bookid: req.query.bookid}, (err, result) => {
                if (err) {
                    res.send(err);
                }
                if (result.deletedCount != 0) {
                    res.json({
                        message: `Book ID : ${req.query.bookid} successfully deleted`
                    });
                }
                else{
                    res.json({
                        message: `Book ID : ${req.query.bookid} doesnt exist`
                    });
                }
            });
        }
        catch{
            res.json({
                message: `Contact system admin`
            });
        }
    }
    
}