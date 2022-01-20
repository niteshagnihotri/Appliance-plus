const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/submit',
    createProxyMiddleware({
      target: 'https://appliance-plus.herokuapp.com',
      changeOrigin: true,
    })
  );
};