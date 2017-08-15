﻿using Blog.Models;
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

        //Get Artice/Create/
        public ActionResult Create()
        {
            return View();
        }

        //POST: Article/Create/
        [HttpPost]
        public ActionResult Create(Article article)
        {
            if (ModelState.IsValid)
            {
                // add to DB
                using (BlogDbContext db = new BlogDbContext())
                {
                    string authorId = db.Users.Where(u => u.UserName == this.User.Identity.Name)
                        .First()
                        .Id;

                    article.AutorId = authorId;

                    db.Articles.Add(article);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
            }

            return View(article);
        }

        // GET article/delete/
        public ActionResult Delete(int? id)
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

        [HttpPost]
        [ActionName("Delete")]
        public ActionResult DeleteConfirmed(int? id)
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

                db.Articles.Remove(currentArticle);
                db.SaveChanges();

                return RedirectToAction("Index");
            }
        }
    }
}