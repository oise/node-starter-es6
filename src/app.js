import express from 'express';
import bodyParser from 'body-parser';
import config from './core/config';
import defaultRoutes from './app.route';
import carsRoute from './cars/cars.route';

const app = express();

const port = config.serverPort;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(`${config.url}`, defaultRoutes);
app.use(`${config.url}/cars`, carsRoute);

//Setup Server
app.listen(port, () => {
  console.log(`Server Started at :${config.serverPort}${config.url}`);
});


