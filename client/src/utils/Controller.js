import axios from 'axios';
const baseUrl =   process.env.API_URL || "https://testing-todo-alpha.vercel.app";
const getallTodo = (setTodos) => {
    axios.get(`${baseUrl}/get`)
    .then(({data}) => {
        console.log(data);
        setTodos(data);
    })
    .catch((err) => console.log(err))
}

const addTodo = (text, setText, setTodos) => {
    axios.post(`${baseUrl}/save`,{text})
    .then((data) => {
        console.log((data));
        setText("");
        getallTodo(setTodos);
    })
    .catch((err) => console.log(err));
}
const updateTodo = (todoId,text, setTodos, setText, setIsUpdate) => {
    axios.put(`${baseUrl}/update`,{_id : todoId,text})
    .then(() => {
        setText("");
        setIsUpdate(false)
        getallTodo(setTodos);
    })
    .catch((err) => console.log(err));
}

const deleteTodo = (_id,setTodos) => {
    // console.log(_id);
    axios.post(`${baseUrl}/delete`,{_id})
    .then(() => {
        getallTodo(setTodos);
    })
    .catch((err) => console.log(err));
}
export {
    getallTodo,
    addTodo,
    updateTodo,
    deleteTodo
}