

const AuthorController = require("../controllers/author.controller"); 

module.exports = (app)=>{
    
    app.post("/api/authors", AuthorController.createNewAuthor);

    app.get("/api/authors", AuthorController.findAllAuthors);

    app.get("/api/authors/:authorId", AuthorController.findOneAuthor);

    app.put("/api/authors/:authorId", AuthorController.updateAuthor);

    app.delete("/api/authors/:authorId", AuthorController.deleteAuthor);
}