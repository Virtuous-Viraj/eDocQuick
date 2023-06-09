const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: 'https://edocquick-backend.onrender.com/',
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};