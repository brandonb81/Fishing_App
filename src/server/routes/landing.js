const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const { renderObject } = req;
  renderObject.title = 'Anglers';
  res.render('landing', renderObject);
});

module.exports = router;
