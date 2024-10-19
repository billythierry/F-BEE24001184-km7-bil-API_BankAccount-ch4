const express = require('express');
const { createTransaction, getTransactions, getTransactionById } = require('../controllers/transactionController');
const router = express.Router();

router.post('/api/v1/transactions', createTransaction);
router.get('/api/v1/transactions', getTransactions);
router.get('/api/v1/transactions/:transactionId', getTransactionById);

module.exports = router;