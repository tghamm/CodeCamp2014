using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using RandomRestaurantService.Models;

namespace RandomRestaurantService.Controllers
{
    [EnableCors("*", "*", "*")]
    public class RandomController : ApiController
    {
        private static Random rnd = new Random();

        [HttpGet]
        public RestaurantEntry GetRandom()
        {
            using (var context = new CodeCamp2014Entities())
            {
                var entries = context.RestaurantEntries.ToList();
                int r = rnd.Next(entries.Count);
                return entries[r];
            }
        }
        [HttpGet]
        public List<RestaurantEntry> GetAll()
        {
            using (var context = new CodeCamp2014Entities())
            {
                var entries = context.RestaurantEntries.ToList();
                return entries;
            }
        }
    }
}
