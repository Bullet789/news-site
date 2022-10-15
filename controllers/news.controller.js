const { text } = require("express");
const { default: mongoose } = require("mongoose");
const Categ = require("../models/categories.model");
const News = require("../models/news.model");

module.exports.newsCont = {
  postNews: async (req, res) => {
    const data = await News.create({
      header: req.body.header,
      text: req.body.text,
      categories: req.body.categories
      
    });
    res.json(data);
  },
  deleteNews: async (req, res) => {
    const data = await News.deleteOne({
      header: req.body.header,
      text: req.body.text,
    });
    res.json("изменён");
  },
  patchNews: async (req, res) => {
    const data = await News.updateOne({
      header: req.body.header,
      text: req.body.text,
    });
    res.json("выполнено");
  },
  getNewsById: async (req, res) => {
    try {
      const data = await News.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getNews: async (req, res) => {
    try {
      const data = await News.find(req.body);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getNewsByCategor: async (req, res) => {
    
      const data = await News.find({categories: req.params.id}).populate('categories')
      res.json(data)
    }
  
};
