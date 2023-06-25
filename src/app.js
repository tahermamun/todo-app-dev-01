const express = require("express");
const app = express();
const routes=require("./app/routes/index");
// parser
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// routers
app.use("/api/v1",routes);




app.get("/heath",(req, res) => {
    res.status(200).json({ 
        status:"success"
    })
})


module.exports = app;
