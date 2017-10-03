import express from 'express';
import sequelize from '../core/db';

const carsRoute = express.Router();

carsRoute.get('/', (req, res) => {

  res.json('cars');
});

export default carsRoute;
