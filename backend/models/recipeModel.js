import mongoose from 'mongoose';
import findOrCreate from 'mongoose-findorcreate';

//Schema for Recipes posted by users
const recipeSchema = new mongoose.Schema({
  recipeName: { type: String, required: true },
  ingredient1: { type: String, required: true },
  ingredient2: { type: String, required: true },
  ingredient3: { type: String, required: true },
  ingredient4: { type: String, required: true },
  ingredient5: { type: String, required: true },
  image: { type: String, required: true },
});

recipeSchema.plugin(findOrCreate);

const RecipieModel = new mongoose.model('Recipe', recipeSchema);

export default RecipieModel;
