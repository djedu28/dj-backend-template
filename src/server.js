const express = require('express');

//require('./database');

const PORT = process.env.PORT || 3333

const app = express();
app.use(express.json());

// app.use(express.static("public"));
// app.use('/favicon.ico', express.static('public/favicon.ico'));

// Rotas

// app.use("/ping", (req,res)=>{
//     res.json({"pint":"pong"});
// });

app.listen(PORT);

console.log('No Ar!', 'Na porta:', PORT)
// console.log("CONFIG:EDU =", process.env.EDU)
// console.log("CONFIG:BD  =", process.env.BD)
//console.log("CONFIG:JWT_EXPIRES_IN =", process.env.JWT_EXPIRES_IN)
