var router = require('express').Router();
router.get('/home',function (req, res) {
  var obj = {
    'name':'samlin',
    'fortune': 'Conquer your fears or they will Conquer you.'
  };
  res.render('home', obj);
});
router.get('/about',function (req, res) {
  res.render('about')
});
module.exports = router;
