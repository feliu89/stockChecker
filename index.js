const express = require('express');

const PORT = 4000;
const app = express();

app.get('/', (req,res) => res.send('Hello world 🌎'))

app.listen(PORT, () => console.log(`Server is runing at ${PORT} 🚀`));
