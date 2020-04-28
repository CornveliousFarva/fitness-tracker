// Dependencies
const Workout = require('../models/workout-model.js')

//Routes
module.exports = function(app){
    app.get("/api/all", function(req, res) {

        // Finding all Workouts, and then returning them to the user as JSON.
        // Sequelize queries are asynchronous, which helps with perceived speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
        Workout.findAll({}).then(function(results) {
          // results are available to us inside the .then
          res.json(results);
        });
    
      });
    
      // Add a Workout
      app.post("/api/new", function(req, res) {
    
        console.log("Workout Data:");
        console.log(req.body);
    
        Workout.create({
          author: req.body.author,
          body: req.body.body,
          created_at: req.body.created_at
        }).then(function(results) {
          // `results` here would be the newly created workout
          res.end();
        });
    
      });
    
    };
};