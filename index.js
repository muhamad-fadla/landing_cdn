const express = require('express');
const fs = require('fs')
const app = express();
const path = require('path')


app.set('env', 'production')
app.set('cache', true)
app.disable('x-powered-by')


app.use(express.static(path.join(__dirname, 'static')))


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));