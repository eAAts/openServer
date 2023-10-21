var express = require('express');
const { signFromChainID } = require('../controller/payment');
const { signFromChainID2 } = require('../controller/payment2');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/payment', async function(req, res, next) {
  const tokenAddress = req.query.tokenAddress;
  const amount = req.query.amount;
  const targetChainId = req.query.targetChainId;
  console.log("checking params >>", tokenAddress,amount,targetChainId);
  const txhash = await signFromChainID(
    tokenAddress,
    amount,
    targetChainId 
  );
  res.send(txhash);
});
router.get('/payment2', async function(req, res, next) {
  await signFromChainID2();
});
//127.0.0.1:3000/payment?tokenAddress=0xe432143214&amount=123&targetChainId=1

module.exports = router;
