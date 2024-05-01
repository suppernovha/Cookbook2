const mongoose = require('mongoose')

const ingredientSchema = mongoose.Schema({
    amount: { type: Number, required: true},
    unit: { type: String, required: true}
})

const recipeSchema = mongoose.Schema({ 
    title: { type: String, required: true },
    id: { type: String, required: true },
    picture: { type: String, required: true },
    type: { type: String, required: true },
    ingredients: { type: Map, of: ingredientSchema, required: true },
    preparation: { type: Number, required: true },
    cooking_duration: { type: Number, required: true },
    utensils: [{ type: String, required: true }],
    steps: [{ type: String, required: true }],
    people: { type: Number, required: true },
})

module.exports = mongoose.model('Recipe', recipeSchema)