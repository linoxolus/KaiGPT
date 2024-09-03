const express = require('express');
const dotenv = require('dotenv');
const route = require('./routes');
const app = express();
const port = 8080;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

route(app);

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});
