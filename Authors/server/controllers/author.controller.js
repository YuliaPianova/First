const Author = require("../models/author.model.js"); 

module.exports = {
    createNewAuthor: (req, res) => { 
        Author.create(req.body)  
            .then((newAuthor) => {
                console.log(newAuthor);
                res.json(newAuthor)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    findAllAuthors: (req, res) => {
        Author.find({})
        .then((allAuthors)=> res.json(allAuthors))
    
        .catch((err) => {console.log(err);
        res.status(400).json(err);
        })

    },

    findOneAuthor: (req, res) => {
        Author.findById({ _id: req.params.authorId }) // -id = automatically created field in mongoDB( mongoose.Schema) along with updated at and created at.
                                                       // AuthorId = request parameter id (could be called whatever we want), must match name in routes
        
            .then((OneAuthor) => {
    
                res.json(OneAuthor);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate({ _id: req.params.authorId }, req.body, {
                new: true, // newly updated document.
                runValidators: true
            })
                .then((updatedAuthor) => {

                res.json(updatedAuthor);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err);
        })
    },
    
        deleteAuthor: (req, res) => {
            Author.deleteOne({ _id: req.params.authorId })
                .then((deletedAuthor) => {res.json(deletedAuthor);
                })
                .catch((err) => {console.log(err);
                    res.status(400).json(err);
        })
    },
}
