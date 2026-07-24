import express from "express"
import {User, getUsers} from '../controllers/user.controller.js'

const router = express.Router();

router.post('/register', User);

router.get('/users', getUsers);


export default router