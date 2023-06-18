const model = require('../models/todomodel');
const getTodo = async (req ,res) => {
    const todo = await model.find();
    res.send(todo);
}
const saveTodo = async (req ,res) => {
    const {text} = req.body;
    model.create({text})
    .then((data) => {
        console.log("data added successfully...");
        console.log(data);
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    })
}
const updateTodo = async (req,res) => {
    const {_id ,text} = req.body;
    model.findByIdAndUpdate(_id,{text})
    .then(()=> res.send("updated successfully..."))
    .catch((err) => console.log(err));
}

const deleteTodo = async (req,res) => {
    const {_id ,text} = req.body;
    model.findByIdAndDelete(_id,{text})
    .then(()=> res.send("deleted successfully..."))
    .catch((err) => console.log(err));
}
module.exports = {
    getTodo,
    saveTodo,
    updateTodo,
    deleteTodo
}