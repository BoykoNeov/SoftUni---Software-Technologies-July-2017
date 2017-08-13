using System.Web.Mvc;
using TODOList.Models;

namespace TODOList.Controllers
{
    public class TaskController : Controller
    {
        [HttpPost]
        public ActionResult Create(Task task)
        {
            if (task != null)
            {
                using (var db = new TaskDbContext())
                {
                    db.Tasks.Add(task);
                    db.SaveChanges();
                }
            }

            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public ActionResult Delete (int? id)
        {
            if (id != null)
            {
                using (var db = new TaskDbContext())
                {
                    Task taskToDelete = db.Tasks.Find(id);

                    if (taskToDelete != null)
                    {
                        db.Tasks.Remove(taskToDelete);
                        db.SaveChanges();
                    }
                }
            }

            return RedirectToAction("Index", "Home");
        }
    }
}