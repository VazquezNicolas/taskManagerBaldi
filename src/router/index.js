const tasksController = require ('../tasks/tasksController')

const router = app => {
    app.use('/api/tasks', tasksController)
}

module.exports = router