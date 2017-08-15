using Blog.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;

namespace Blog.Controllers
{
    public class ArticleController : Controller
    {
        // GET: Article
        public ActionResult Index()
        {
            return RedirectToAction("List");
        }

        // Get: Article/List
        public ActionResult List()
        {
            using (BlogDbContext db = new BlogDbContext())
            {
                List<Article> articles = db.Articles.Include(a => a.Author).ToList();

                return View(articles);
            }
        }
    }
}