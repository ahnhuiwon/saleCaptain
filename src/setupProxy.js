const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', proxy({
            target: 'http://54.173.147.234:5000',
            changeOrigin: true,
        })
    );
};