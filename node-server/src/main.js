const express = require('express');

const app = express();
const PORT = 8001;

// Middleware
app.use(express.json());

// In-memory tasks array
const tasks = [];

// GET /tasks - return the list of tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// POST /tasks - add a new task
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  tasks.push(text);
  res.json({ message: 'Task added successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Node server running on http://localhost:${PORT}`);
});
