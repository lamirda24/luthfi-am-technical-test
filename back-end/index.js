var express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const userRoutes = require('./routes/');
const port = 8080;
var app = express();

const cors = require('cors');

const corsOptions = {
  AccessControlAllowOrigin: '*',
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api/v1/getDataUser', userRoutes);

app.listen(port, () => {
  console.log('Server running on port', port);
  // console.log(postgre);
});
