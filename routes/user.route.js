import express from "express"
import {User} from '../controllers/user.controller.js'

const router = express.Router();

router.post('/register', User);
router.get('/users', async (req, res) => {
    try {
        res.status(200).json({ message: "List of users will appear here." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


export default router