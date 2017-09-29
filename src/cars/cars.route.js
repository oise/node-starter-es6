import express from 'express';

const carsRoute = express.Router();

carsRoute.get('/', (req, res) => {
  res.send('cars');
});

export default carsRoute;
