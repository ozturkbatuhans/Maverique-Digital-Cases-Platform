const express = require("express");
const router = express.Router();



//data
router.get("/", (req, res) => {
  const db = req.app.locals.db;
  const tag = req.query.tag || "";
  let cases;

  if (tag.trim() !== "") {
    const stmt = db.prepare("SELECT * FROM cases WHERE tag = ?");
    cases = stmt.all(tag);
  } else {
    const stmt = db.prepare("SELECT * FROM cases");
    cases = stmt.all();
  }

  res.render("cases/index", {
    title: "Cases",
    cases,
    searchTag: tag
  });
});




/* GET cases page. */
  //router.get("/", function(req, res, next) {
  //  const searchQuery = req.query.search || "";
   // res.render("cases/index", {
  //    title: "Cases",
   //   cases,
  //    searchQuery
   // });
 // });
  

  


// GET /cases/:slug → detailpagina
router.get("/:slug", (req, res) => {
  const db = req.app.locals.db;
  const slug = req.params.slug;
  const query = db.prepare("SELECT * FROM cases WHERE slug = ?");
  const selectedCase = query.get(slug);

  if (!selectedCase) return res.status(404).send("Case not found");

  res.render("cases/detail", {
    title: selectedCase.title,
    case: selectedCase
  });
});


module.exports = router;
