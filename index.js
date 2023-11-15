const express = require("express")
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    
    res.send("Jai shri ram bhai log");
})

app.listen(PORT, (req, res) => {
    console.log("server started at localhost");
});