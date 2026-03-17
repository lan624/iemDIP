const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  user_id: String,
  food_name: { type: String, required: true },
  mealType: {
    type: String,
    enum: ["Tracked", "Planned"],
    default: "Tracked"
  },
  calories: Number,
  carbs: Number,
  protein: Number,
  fats: Number,
  fiber: Number,
  sodium: Number,
  ingredients: {
    type: [String],
    default: []
  },
  notes: String,
  log_date: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("NutritionLog", logSchema);
