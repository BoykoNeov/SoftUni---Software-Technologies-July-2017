using System;
using System.Linq;
using System.Web.Mvc;
using TodoList.Models;

namespace TodoList.Controllers
{
    public class TaskController : Controller
    {
        [HttpGet]
        [Route("")]
        public ActionResult Index()
        {
            // Retrieve the tasks from the database
            using (var db = new TodoListDbContext())
            {
                var tasks = db.Tasks.ToList();
                return View(tasks);
            }
        }

        [HttpGet]
        [Route("create")]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [Route("create")]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Task task)
        {
            // check if task is null
            if (task == null)
            {
                return RedirectToAction("Create");
            }

            // check if everything required is sent
            if (string.IsNullOrWhiteSpace(task.Title) || string.IsNullOrWhiteSpace(task.Comments))
            {
                return RedirectToAction("Create");
            }

            // save the task to the database and return to index
            using (var db = new TodoListDbContext())
            {
                db.Tasks.Add(task);
                db.SaveChanges();

                return RedirectToAction("Index");
            }
        }

        [HttpGet]
        [Route("delete/{id}")]
        public ActionResult Delete(int id)
        {
            Task task = new Task();

            using (var db = new TodoListDbContext())
            {
                task = db.Tasks.Find(id);

                if (task == null)
                {
                    return RedirectToAction("Index");
                }
            }

            return View(task);
        }

        [HttpPost]
        [Route("delete/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirm(int id)
        {
            using (var db = new TodoListDbContext())
            {
                var task = db.Tasks.Find(id);

                if (task != null)
                {
                    db.Tasks.Remove(task);
                    db.SaveChanges();
                }
            }

            return RedirectToAction("Index");
        }
    }
}