const { Router } = require("express");
const {categCont} = require("../controllers/categories.controller");
const route = Router();

route.post("/categories",categCont.postcateg);
route.delete("/categories",categCont.deletecateg);
route.get("/categories",categCont.getcateg);

module.exports = route