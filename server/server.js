const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const mainRouter = require('./router/mainRouter');
// const fmRouter = require('./router/fmRouter');
const ppomRouter = require('./router/ppomRouter');

const server = require('http').createServer(app);

app.use(cors());
// app.use('/fmkorea', fmRouter);
app.use('/ppomppu', ppomRouter);

server.listen(5000, ()=> {
    console.log('서버 구동');
});