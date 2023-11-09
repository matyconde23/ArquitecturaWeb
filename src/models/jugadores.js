var {Schema, model} = require('mongoose')

const JugadorSchema = new Schema({
    code:{
        type: Number,
        required: true
    },
    description:{
        type:String
    },
    edad:{
        type:Number
    }
    ,
    categoria:{
        type:String
    }
})

module.exports = model('Jugador', JugadorSchema);