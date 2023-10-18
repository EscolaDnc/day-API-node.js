const express = require('express');
const router = express.Router();

let tasks = [];
let id = 1;

// GET: Recuperar todas as tarefas
router.get('/', (req, res) => {
    res.json(tasks);
});

// POST: Criar uma nova tarefa
router.post('/', (req, res, next) => {
    try {
        if (!req.body.description) throw new Error('Insira a descrição.');

        const task = {
            id: id++,
            description: req.body.description
        };
        tasks.push(task);
        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
});

// PUT: Atualizar uma tarefa
router.put('/:id', (req, res, next) => {
    try {
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        if (!task) throw new Error('Task not found.');

        if (!req.body.description) throw new Error('Insira a descrição.');
        
        task.description = req.body.description;
        res.json(task);
    } catch (error) {
        next(error);
    }
});

// DELETE: Deletar uma tarefa
router.delete('/:id', (req, res, next) => {
    try {
        const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
        if (taskIndex === -1) throw new Error('Task não funciona');

        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});

module.exports = router;
