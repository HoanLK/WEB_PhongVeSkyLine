using CMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace CMS.Controllers
{
    public class HomeController : Controller
    {
        private SkylineEntities db = new SkylineEntities();
        [Route]
        public ActionResult Index()
        {
            return View();
        }

        [Route("gioi-thieu")]
        public ActionResult GioiThieu()
        {
            return View();
        }

        [Route("ve-noi-dia")]
        public ActionResult VeNoiDia()
        {
            return View();
        }

        [Route("ve-quoc-te")]
        public ActionResult VeQuocTe()
        {
            return View();
        }

        [Route("lien-he")]
        public ActionResult LienHe()
        {
            return View();
        }
    }
}
