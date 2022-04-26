const mongoose = require("mongoose");


const dbName = "authors";

mongoose.connect(`mongodb://localhost/${dbName}`, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`Connected to ${dbName} database.`))
    .catch((err) => console.log("Problem with connectiing the db. The error:", err));

    