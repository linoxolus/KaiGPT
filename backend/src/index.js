const express = require('express');
const dotenv = require('dotenv');
const route = require('./routes');
const app = express();
const port = 8080;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route(app);

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});
