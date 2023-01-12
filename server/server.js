const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const mainRouter = require('./router/mainRouter');
const ppomRouter = require('./router/ppomRouter');
const ppomFoodRouter = require('./router/ppomFoodRouter');

const server = require('http').createServer(app);

app.use(cors());

app.use('/ppomppu', ppomRouter);
app.use('/food', ppomFoodRouter);

server.listen(5000, ()=> {
    console.log('서버 구동');
});