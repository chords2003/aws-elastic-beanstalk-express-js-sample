const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('How are you world, A new pipeline is created with CI and CD!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
