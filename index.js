const express = require('express');
const  bodyParser=require('body-parser'); 
const routes =require('./routes/api');
const mongoose =require('mongoose');

//set up express app
const app = express();
//conectada o mongodb
mongoose.connect('mongodb://localhost:27017/gamification');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use("/links",express.static('link'));
app.use(bodyParser.json());
//inicializa as rotas 
app.use('/api',routes);

//erro no handling
app.use((err,req,res,next)=>{
    //console.log(err);
    res.status(500).send({error:err.menssage});
});
// litsta para os requests
app.listen(process.env.port || 4000, ()=>{
    console.log("rodando");
});