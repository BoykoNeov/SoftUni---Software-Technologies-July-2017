const mongoose = require('mongoose');

// defines the schema
let taskSchema = mongoose.Schema({
    title: {type: 'string', required: 'true'},
    comments: {type: 'string', required: 'true'},
});

//turns the schema into a model
let Task = mongoose.model('Task', taskSchema);

// Make it 'public', exports the model
module.exports = Task;