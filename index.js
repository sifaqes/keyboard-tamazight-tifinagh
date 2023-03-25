//create server  port on port  3000
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

//create page html con css
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>My Page</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
        </html>
    `);
});

//create css file
app.get('/style.css', (req, res) => {
    res.send(`
        h1 {
            color: blue;
        }
    `);
});