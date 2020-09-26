const express = require('express');
const Alunos = require('../database/models/alunos');
const Turma = require('../database/models/turmas');
const router = express.Router();


//get todos os alunos 
router.get('/alunos',(req,res,next)=>{
    Alunos.find({turma_id:req.query.turma_id}).then((aluno)=>{
        res.send(aluno);  
    })
});
//adiciona 1 aluno
router.post('/alunos',(req,res,next)=>{
    Alunos.create(req.body).then((aluno)=>{
        res.send(aluno);
    }).catch(next);
});
//atualiza um aluno no db
router.put('/alunos/:id/:senha',(req,res,next)=>{
    Alunos.findByIdAndUpdate({_id: req.params.id,senha: req.params.senha},req.body).then((aluno)=>{
        Alunos.findOne({_id: req.params.id}).then((aluno)=>{
            res.send(aluno);
        }); 
    });
});
//deleta um aluno do db
router.delete('/alunos/:id',(req,res,next)=>{
    Alunos.deleteOne({_id: req.params.id}).then((aluno)=>{
        res.send(aluno);
    })
});
/////////////////////////////////////////////////////////////////////////////////
//retorna uma turma

router.get('/turma',(req,res,next)=>{
    Turma.find({id:req.query.id}).then((turma)=>{
        res.send(turma);
    })
});
router.get('/turmas',(req,res,next)=>{
    console.log(req.query.email)
    console.log(req.query.senha)
    Turma.find({
        email_professor:req.query.email,
        senha:req.query.senha
    }).then((turma)=>{
        
        res.send(turma);
    })
});
//cria uma turma 
router.post('/turma',(req,res,next)=>{
    Turma.create(req.body).then((turma)=>{
        res.send(turma);
    }).catch(next);
});
//atualiza um turma no db
router.put('/turma/:id/senha',(req,res,next)=>{
    Turma.findByIdAndUpdate({_id: req.params.id, senha:req.params.senha},req.body).then((turma)=>{
        Turma.findOne({_id: req.params.id}).then((turma)=>{
            res.send(turma);
        }); 
    });
});
//deleta um turma do db
router.delete('/turma/:id',(req,res,next)=>{
    Turma.deleteOne({_id: req.params.id}).then((turma)=>{
        res.send(turma);
    })
});
//retorna o rank de uma turma
router.get('/turma/rank/:id',(req,res,next)=>{
    Alunos.findBy({id_turma:req.params.id})
})
module.exports=router;