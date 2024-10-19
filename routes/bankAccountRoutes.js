const express = require('express');
const { createBankAccount, getBankAccounts, getBankAccountById } = require('../controllers/bankAccountController');
const router = express.Router();

router.post('/api/v1/accounts', createBankAccount);
router.get('/api/v1/accounts', getBankAccounts);
router.get('/api/v1/accounts/:accountId', getBankAccountById);

module.exports = router;