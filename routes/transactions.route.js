import express from 'express';
import {listTransactions} from '../controllers/transaction.controller.js'
import {getTransactionById} from '../controllers/transaction.controller.js'



const router = express.Router();

router.get('/transactions', listTransactions);
router.get('/transactions/:id', getTransactionById);

export default router;