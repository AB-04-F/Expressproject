var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/training/php/laravel', function(req, res, next) {
  res.send('sure we will provide training in laravel');
});

router.get('/training/Nodejs /Express js', function(req, res, next) {
  res.send('sure we will provide training in Express js');
});

router.get('/master', function(req, res, next) {
  res.render('master');
});

router.get('/myform', function(req, res, next) {
  res.render('form');
});

router.post('/form-process', function(req, res, next) {
   var a = parseInt(req.body.txt1);
   var b = parseInt (req.body.txt2);
   var c = a + b;
   var msg = '';
   var mycolor = '';
   if(c>100)
   {
      msg = "fail";
      mycolor="red";
   }
   else
   {
      msg = "pass";
      mycolor = "green";
   }


   console.log(req.body)
   console.log("A Value is " + a    +   "B Value is" +b);

   res.render('ans', {mya:a , myb:b , myc:c , mymsg:msg , mycolor:mycolor});
});


module.exports = router;
