const router = require('express').Router();
const WalletController = require('../controllers/walletController');
const walletController = new WalletController();

router.get('/:user_id', walletController.getUser);
router.put('/:user_id', walletController.addBalance);

module.exports = router;