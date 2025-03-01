require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for form data

configViewEngine(app);

app.use('/', webRouters);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })