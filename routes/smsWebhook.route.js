import express from "express"
import {receivesSmsWebhook} from '../controllers/smsWebhook.controller.js'
import {listRawMessages} from '../controllers/smsWebhook.controller.js'


const router = express.Router();

router.post('/sms-webhook', receivesSmsWebhook)
router.get('/raw-messages', listRawMessages)

export default router