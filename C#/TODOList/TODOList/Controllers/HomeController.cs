using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using TODOList.Models;

namespace TODOList.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            using (TaskDbContext db = new TaskDbContext())
            {
                List<Task> allTasks = db.Tasks.ToList();
                return View(allTasks);
            }
        }
    }
}