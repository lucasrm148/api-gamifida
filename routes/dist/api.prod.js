"use strict";var express=require("express"),Alunos=require("../database/models/alunos"),router=express.Router();router.get("/alunos",function(e,t,o){t.send({type:"GET"})}),router.post("/alunos",function(e,t,o){Alunos.create(e.body).then(function(e){t.send(e)}).catch(o)}),router.put("/alunos/:id",function(e,t,o){t.send({type:"PUT"})}),router.delete("/alunos/:id",function(e,t,o){t.send({type:"DELETE"})}),module.exports=router;