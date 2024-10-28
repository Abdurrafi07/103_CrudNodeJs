const express = require('express');
const todosRoutes = require('./routes/data');
const app = express();
const port = 3000;

app.use(express.json())
app.use('/todos', todosRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
})

app.listen(port,()=> {
    console.log(`server berjalan di http://localhost:${port}`);
});