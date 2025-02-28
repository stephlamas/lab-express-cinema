const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  },

);

//Hay que exportar el modelo
module.exports = model("movies", movieSchema);
