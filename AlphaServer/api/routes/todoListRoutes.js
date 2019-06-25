'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/view')
    .get(todoList.list_all_tasks);

  app.route('/push')
    .post(todoList.push_new_entry);


};