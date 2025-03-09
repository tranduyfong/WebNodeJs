require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const connection = require('./config/database');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for form data

configViewEngine(app);

// connection.query(
//   'SELECT * FROM Users',
//   function(err, results, fields) {
//     console.log('Results: ', results);
//   }
// )

app.use('/', webRouters);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })