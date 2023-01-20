import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import { config } from 'dotenv';
import recipeRoutes from './routes/recipeRoutes.js';

import RecipieModel from './models/recipeModel.js';

config();
connectDB();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', recipeRoutes);

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log('Server started on port 5000');
});
