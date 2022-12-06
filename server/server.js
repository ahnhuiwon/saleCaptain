const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const mainRouter = require('./router/mainRouter');

const server = require('http').createServer(app);

app.use(cors());
app.use('/about_router', mainRouter);

server.listen(8080, ()=> {
    console.log('서버 구동');
});