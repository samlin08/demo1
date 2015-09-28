var router = require('express').Router();
router.get('/other',function (req, res) {
  res.render('500')
});

module.exports = router;
