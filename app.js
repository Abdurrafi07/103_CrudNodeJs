const express = require('express');
const todoRoutes = require('./todo.js');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/todos', todoRoutes);
app.set('view engine', 'ejs');

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.use((req, res) => {
    res.status(404).send('Au Ah Gelap');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});