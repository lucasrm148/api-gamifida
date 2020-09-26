"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mongoose = require('mongoose');

var alunos = require('../../classes/alunos');

var Schema = mongoose.Schema; //cria a sena do aluno e o modelo

var AlunosSchema = new Schema((_ref = {
  id: {
    type: String
  },
  nome: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'o email do aluno e requisitado']
  }
}, _defineProperty(_ref, "email", {
  type: String
}), _defineProperty(_ref, "titulo", {
  type: String,
  "default": "default"
}), _defineProperty(_ref, "titulo_list", {
  type: Array,
  "default": ["default"]
}), _defineProperty(_ref, "fundo", {
  type: String,
  "default": "default"
}), _defineProperty(_ref, "fundo_list", {
  type: Array,
  "default": ["default"]
}), _defineProperty(_ref, "medalhas", {
  type: Array,
  "default": ["default"]
}), _defineProperty(_ref, "nivel", {
  type: Number,
  "default": 0
}), _defineProperty(_ref, "pontos", {
  type: Number,
  "default": 0
}), _defineProperty(_ref, "exp", {
  type: Number,
  "default": 0
}), _defineProperty(_ref, "available", {
  type: Boolean,
  "default": false
}), _ref));
var Alunos = mongoose.model('alunos', AlunosSchema);
module.exports = Alunos;