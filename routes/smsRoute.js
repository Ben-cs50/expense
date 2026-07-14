import express from "express"
import {receivesSmsWebhook} from '../controllers/smsController.js'

const router = express.Router();

router.post('/sms-webhook', receivesSmsWebhook)

export default router