using Blog.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
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

        //Get: Article/Details/
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            using (BlogDbContext db = new BlogDbContext())
            {
                Article currentArticle = db.Articles.Where(a => a.Id == id)
                    .Include(a => a.Author)
                    .FirstOrDefault();

                if (currentArticle == null)
                {
                    return HttpNotFound();
                }

                return View(currentArticle);
            }
        }
    }
}