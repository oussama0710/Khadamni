const mongoose = require('mongoose');


// connect to mongodb
module.exports = (DB) =>{
    mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`)
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
}