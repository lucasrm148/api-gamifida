"use strict";

var express = require('express');

var Alunos = require('../database/models/alunos');

var router = express.Router(); //get todos os alunos 

router.get('/alunos', function (req, res, next) {
  res.send({
    type: 'GET'
  });
}); //adiciona 1 aluno

router.post('/alunos', function (req, res, next) {
  Alunos.create(req.body).then(function (aluno) {
    res.send(aluno);
  })["catch"](next);
}); //atualiza um aluno no db

router.put('/alunos/:id', function (req, res, next) {
  res.send({
    type: 'PUT'
  });
}); //deleta um aluno do db

router["delete"]('/alunos/:id', function (req, res, next) {
  res.send({
    type: 'DELETE'
  });
});
module.exports = router;