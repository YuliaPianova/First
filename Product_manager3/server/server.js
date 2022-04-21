

const express = require("express"); 
const cors = require("cors");
const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(cors({ 
    origin:"http://localhost:3000" 
})
);

require("./config/mongoose.config"); 
require("./routes/product.routes")(app);


const myPort = 8001

app.listen(myPort, ()=>console.log(`running on port ${myPort}`));