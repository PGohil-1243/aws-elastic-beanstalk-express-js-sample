const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Congratulations! You have a fully functional continuous delivery pipeline hosted on AWS.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
