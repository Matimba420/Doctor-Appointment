
   
const express = require("express");
const userRouter= require('./src/routes/routes');
const bodyParser =require("body-parser");
const cors = require('cors');

const app = express();
const port = 3000;

var corsOptions={
    origin:'http://localhost:4200',
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Doctor appointment backend application is up.");
});

app.use("/api/",userRouter);




app.listen(port,'0.0.0.0', () => {
    console.log(`server is listening ${port}`);
});