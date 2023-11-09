const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost/red-torneos'  // Usar ':' en lugar de ';'

mongoose.connect(MONGODB_URI, {

})
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err))