const express = require('express');

const app = express();

const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello");
})

let port = process.env.PORT;
if (port == null || port === "") {
    port = 3000;
}

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});