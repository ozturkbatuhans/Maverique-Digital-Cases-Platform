var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET cases page. */


/* GET contact page. */
router.get("/contact", function(req, res, next) {
  res.render("contact", { title: "Contact" });
});

//info-section
router.get("/", function(req, res, next) {
  const sections = [
    {
      tag: "kwaliteit",
      title: "Over ons",
      description: "Bij Maverique geloven we in innovatie en maatwerk...",
      imageUrl: "/images/theme/light/img-1-1000x800.jpg",
      isLeft: false
    },
    {
      tag: "Services",
      title: "Onze diensten",
      description: "Van web- en app-ontwikkeling tot cloudoplossingen...",
      imageUrl: "/images/theme/light/img-2-1000x800.jpg",
      isLeft: true
    },
    {
      tag: "Management",
      title: "Onze aanpak",
      description: "Betrouwbaarheid en resultaatgerichtheid staan centraal...",
      imageUrl: "/images/theme/light/img-3-1000x800.jpg",
      isLeft: false
    },
    {
      tag: "Why?",
      title: "Waarom Kiezen Voor Ons?",
      description: "Met jarenlange ervaring en een bewezen staat van dienst...",
      imageUrl: "/images/theme/light/img-4-1000x800.jpg",
      isLeft: true
    }
  ];

  res.render("index", { title: "Home", sections });
});


router.post("/contact", function (req, res) {
  const db = req.app.locals.db;
  const { name, email, message } = req.body;
  const insert = db.prepare("INSERT INTO submissions (name, email, message, createdAt) VALUES (?, ?, ?, datetime('now'))");
  insert.run(name, email, message);

  res.redirect(`/thank-you?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
});



module.exports = router;
