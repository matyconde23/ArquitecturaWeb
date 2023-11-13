var {Schema, model} = require('mongoose')
var torneo = require('./torneo')


const PlayerSchema = new Schema({
    dni:{
        type: Number,
    },
    edad:{
        type:Number
    },
    categoria:{
        type:String
    },
    torneo:{
        type:String
    }
})

module.exports = model('Player', PlayerSchema);