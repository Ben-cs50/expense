import express from "express"
import {user} from '../controllers/user.controller.js'

const router = express.Router();

router.post('/users', user);


export default router