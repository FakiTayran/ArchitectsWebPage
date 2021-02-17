const mongoose = require("mongoose");
const express = require('express') ;
const app = express();
const port = 3000
var bodyParser = require('body-parser');
var cors = require('cors');


app.listen(port)

mongoose.connect("mongodb+srv://fakitayran:23323847lol@carparkcluster.aon22.mongodb.net/ArchitectDb",{ useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors())



const { Schema } = mongoose;

const contactSchema  = new Schema({
    name: String,
    email:String,
    subject:String,
    comment:String,
}) ;

const contact = mongoose.model("contact",contactSchema)


app.post("/contact",(req,res)=>{
    let newcontact = new contact({
        name: req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        comment:req.body.comment
    });

    newcontact.save((err,doc)=>{
        if(doc != null){
            res.json(doc)
        }
        else{
            res.json(err)
        }
    })
});

app.get("/contact",(req,res)=>{
    contact.find({},(err,docs)=>{
        if(docs != null){
            res.json(docs)
        }
        else{
            res.json(err)
        }
    });

});