const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const { engine } = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', engine({
    layoutsDir: path.join(__dirname, './', '/views/layouts'),
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: path.join(__dirname, './', '/views/partials')
    }));
app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
    res.render('main', {layout : 'index'});
});

app.listen(port, () => console.log(`App listening to port ${port}`));