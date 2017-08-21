const Task = require('../models/Task');

module.exports = {

    // finds all the tasks and sends them to the view
    index: (req, res) => {
 //       let taskPromises = [Task.find({status: "Open"}),
//            Task.find({status: "InProgress"}),
//            Task.find({status: "Finished"}),
//            Task.find({status: "Open"})]

            Task.find().then(tasks => {
            res.render('task/index', {
                'inProgressTasks': tasks.filter(t => t.status === "In Progress"),
                'openTasks': tasks.filter(t => t.status === "Open"),
                'finishedTasks': tasks.filter(t => t.status === "Finished"),
            })
        });
    },
    // returns the create form
    createGet: (req, res) => {
        res.render('task/create')
    },

    createPost: (req, res) => {
        // uses the post body, which contains the needed information (in this case "title" and "comments"
        let taskArgs = req.body;

        // if one of the two is null, redirect to index
        if (taskArgs.title === "" || taskArgs.comments === ""){
            res.redirect('/');
            return;
        }

        // sends the body as a schema, and after creating the task redirects to index
        Task.create(taskArgs).then(task => res.redirect('/'))
    },



	editGet: (req, res) => {
        // gets the id from the request
        let id = req.params.id;

        //finds the task from the db, if no such task exists, redirects to main
        Task.findById(id).then(task =>{
            if (!task){
                res.redirect('/');
                return
            }

            // if task exists sends it to view
            res.render('task/edit', task)
        });
	},

	editPost: (req, res) => {
        // gets the id from the request
        let id = req.params.id;
        let task = req.body;

        // finds the task and deletes it
        Task.findByIdAndUpdate(id, task, {runValidators:true} ).then(task => {
            res.redirect('/');
        });
    }
};