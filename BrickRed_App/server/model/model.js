const mongoose = require('mongoose');


var schema = new mongoose.Schema({

    testSuite: {
        type: String,
        required: true
    },
    testCase: {
        type: String,
        required: true
    },
    testSteps: {
        type: String,
        required: true
    },
    status: String
   
})

const Userdb = mongoose.model('userdb',schema);
module.exports=Userdb;