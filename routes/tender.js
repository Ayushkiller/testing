const express = require("express");
const { isLoggedIn } = require("../middleware");
const Tender = require("../models/tender");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router({ mergeParams: true });

router.get(
  "/",
  wrapAsync(async (req, res) => {
    const tenders = await Tender.find({});
    res.render("tenders/index", { tenders });
  })
);

router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const tender = await Tender.findById(id);
    res.render("tenders/show", { tender });
  })
);

module.exports = router;
