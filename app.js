const express = require('express')
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()
const port = process.env.PORT || 3000

app.use('/users', createProxyMiddleware({ 
	target: 'https://v1.stormapi.com/', 
	changeOrigin: true 
	})
)

app.use('/contacts', createProxyMiddleware({ 
	target: 'https://v1.stormapi.com/', 
	changeOrigin: true 
	})
)

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`))