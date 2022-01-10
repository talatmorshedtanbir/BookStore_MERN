const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes')
const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));
app.use(routes)

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));