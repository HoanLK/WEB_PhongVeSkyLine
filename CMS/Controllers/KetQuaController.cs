using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CMS.Controllers
{
    [RoutePrefix("ket-qua")]
    public class KetQuaController : Controller
    {
        [Route("trong-nuoc")]
        public ActionResult TrongNuoc()
        {
            return View();
        }

        [Route("quoc-te")]
        public ActionResult QuocTe()
        {
            return View();
        }
    }
}