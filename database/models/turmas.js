const mongoose = require('mongoose');

const Schema =mongoose.Schema;

/*const Nivel = new Schema({
    requisito:{
        type:Number,
        default:0
    },
    nivel:{
    type:Number,
    default: 0
    },
    recompensa_fundo:{
        type:Array,
        default:["defaut"]
    },
    recompensa_imagem:{
        type:Array,
        default:["defaut"]
    },
    recompensa_titulo:{
        type:Array,
        default:["defaut"]
    }
});*/

const turma = new Schema({
    nome:{
        type:String,
    },
    professor:{
        type:String,
    },
    email_professor:{
        type:String,
        required:[true,"email field is required"]
    },
    senha:{
        type:String,
    },
    titulos_disponiveis:{
        type:Array,
        default:["defaut"]
    },
    fundos_disponiveis:{
        type:Array,
        default:["defaut"]
    },
    imagens_disponiveis:{
        type:Array,
        default:["defaut"]
    },
    nivel:{
        type:Array,
        default:["oi"]
    },
    available:{
        type: Boolean,
        default:false
    }
});
const Turma=mongoose.model('Turma',turma);

module.exports = Turma;