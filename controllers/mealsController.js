const Meal = require('../models/meal')

class MealsController {
  static index(request, response, next){
    Meal.all()
    .then(meals => response.json(meals))
  }

  static show(request, response, next){
    Meal.find(request.params.meal_id)
    .then(meal => {
      eval(pry.it)
      if(meal) {
        Meal.foods(meal)
        .then(foods => response.json(foods))
      } else {
        response.sendStatus(404)
      }
    })
  }
}

module.exports = MealsController
