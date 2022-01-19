const { Router } = require('express');
var express = require('express');
var router = express.Router();


// FakeDB
var dataBike = [
  {name:"Shimano", url:"/images/bike-1.jpg", price:679},
  {name:"Peugeot", url:"/images/bike-2.jpg", price:800},
  {name:"Mongoose", url:"/images/bike-3.jpg", price:1100},
  {name:"Campagnolo", url:"/images/bike-4.jpg", price:899},
  {name:"Mercier", url:"/images/bike-5.jpg", price:2599},
  {name:"Vario", url:"/images/bike-6.jpg", price:2100}
]


//FakeDbBasket
var dataCardBike = [
  {name:"Shimano", url:"/images/bike-1.jpg", price:679, quantity:1},
  {name:"Mongoose", url:"/images/bike-3.jpg", price:1100, quantity:1},
  {name:"Vario", url:"/images/bike-6.jpg", price:2100, quantity:1}
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dataBike:dataBike});
});

router.get('/shop', function(req, res, next){
  res.render('shop', {dataCardBike:dataCardBike})
});

module.exports = router;
