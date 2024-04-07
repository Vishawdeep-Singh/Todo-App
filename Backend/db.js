const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://vishawdeepsingh29:DxzYlg9wcjGuHKGh@cluster0.vovi9j4.mongodb.net/Todo-App')

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('Todos',todoSchema);

module.exports = {
    todo
}