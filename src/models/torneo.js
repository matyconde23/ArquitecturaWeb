var {Schema, model} = require('mongoose')

const TorneoSchema = new Schema({
    nombre:{
        type:String
    },
    lugar:{
        type:String
    }
    ,
    categoria:{
        type:String
    }
})


module.exports = model('Torneo', TorneoSchema);