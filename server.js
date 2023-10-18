const express = require('express');
const tasksRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/ErrorHandler');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/tasks', tasksRoutes);

app.use(errorHandler); // Deve ser o último middleware antes do app.listen

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
