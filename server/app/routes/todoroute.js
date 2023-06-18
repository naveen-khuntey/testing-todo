const express = require('express');
const { getTodo, saveTodo, updateTodo, deleteTodo } = require('../controlllers/todocontroller');
const router = express.Router();

router.get('/',getTodo);
router.post('/save',saveTodo);
router.put('/update',updateTodo);
router.post('/delete',deleteTodo);

module.exports = router;