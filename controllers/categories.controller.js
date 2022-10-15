const Categ = require("../models/categories.model");

module.exports.categCont = {
  postcateg: async (req, res) => {
    try {
      const data = await Categ.create({
       namecateg : req.body.namecateg});
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deletecateg: async (req, res) => {
    try{
        const data = await Categ.deleteOne({
            namecateg: req.body.namecateg
        });
        res.json(data);
    } catch (error) {
        res.json(error);
    }
  },
  getcateg: async (req, res) => {
    try{
        const data = await Categ.find({
        
        })
        res.json(data);
    } catch (error) {
        res.json(error);
    }
  }
};
