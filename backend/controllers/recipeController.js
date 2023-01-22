import mongoose from 'mongoose';

import expressAsyncHandler from 'express-async-handler';
import RecipieModel from '../models/recipeModel.js';

const addRecipe = expressAsyncHandler(async (req, res) => {
  const newRecipe = new RecipieModel({
    recipeName: req.body.recipeName.trim()toLowerCase(),
    ingredient1: req.body.ingredient1,
    ingredient2: req.body.ingredient2,
    ingredient3: req.body.ingredient3,
    ingredient4: req.body.ingredient4,
    ingredient5: req.body.ingredient5,
    image: req.body.image,
  });

  newRecipe.save(function (err) {
    err ? console.log(err) : res.send('Successfully added new Recipe');
  });
});

const getRecipe = expressAsyncHandler(async (req, res) => {
  //   const query = req.query.search.toLowerCase();
  RecipieModel.find(
    { recipeName: req.query.search.toLowerCase() },
    function (err, foundRecipies) {
      err ? res.send(err) : res.send(foundRecipies);
    }
  );
});

const deleteRecipe = expressAsyncHandler(async (req, res) => {
  RecipieModel.deleteOne({ recipeName: req.query.delete }, function (err) {
    err ? res.send(err) : res.send('Successfully deleted the item');
  });
});

export { addRecipe, getRecipe };
