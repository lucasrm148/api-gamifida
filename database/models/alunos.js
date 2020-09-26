const mongoose = require('mongoose');

const Schema =mongoose.Schema;

//cria a sena do aluno e o modelo

const AlunosSchema = new Schema({
    id:{
        type: String,
    },
    nome:{
        type: String,
    },
    email:{
        type:String,
        required:[true,'email field is required']
    },
    titulo:{
        type:String,
        default:"default"
    },
    titulo_list:{
        type:Array,
        default:["default"]
    },
    fundo:{
        type:String,
        default:"default"
    },
    fundo_list:{
        type:Array,
        default:["default"]
    },
    medalhas:{
        type:Array,
        default:["default"]
    },
    nivel:{
        type:Number,
        default:0
    },
    pontos:{
        type:Number,
        default:0
    },
    exp:{
        type:Number,
        default:0
    },
    available:{
        type:Boolean,
        default:false
    },
    turma:{
        type:String
    },
    id_turma:{
        type:String
    }
});
const Alunos=mongoose.model('alunos',AlunosSchema);

module.exports= Alunos;