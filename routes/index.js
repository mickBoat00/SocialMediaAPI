var express = require('express');
var router = express.Router();
const dotenv = require('dotenv')
const mongoose = require('mongoose')


dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser:true, useUnifiedTopology:true }, ()=>{
  console.log("Connected to MongoDB..")
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
