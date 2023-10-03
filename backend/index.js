// import express
const express = require('express');

const userRouter = require('./routers/userRouter');
const utilRouter = require('./routers/utils');
const showRouter = require('./routers/showRouter');
const cors = require('cors');

// initialize express
const app = express();
const port = 5000;

// middlewares
app.use(express.json());
app.use(cors({
    origin: [ 'http://localhost:3000' ]
}));

app.use( '/user', userRouter );
app.use( '/util', utilRouter );
app.use( '/show', showRouter );

app.use(express.static('./uploads'));

// routes
app.get('/', (req, res) => {
    res.send('response from index');
});

app.get('/home', (req, res) => {
    res.send('response from home');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.get('/getall', (req, res) => {
    res.send('response from getall');
});

// home
// add
// getall

// starting the server
app.listen( port, () => { console.log('express server started') } );