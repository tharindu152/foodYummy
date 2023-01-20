import express from 'express';
import { addRecipe, getRecipe } from '../controllers/recipeController.js';

const router = express.Router();

router.route('/recipe').post(addRecipe).get(getRecipe);

export default router;
