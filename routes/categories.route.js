import express from "express"
import {listCategories} from '../controllers/categories.controller.js'
import {createCategory} from '../controllers/categories.controller.js'

const router =express.Router();

router.get('/categories', listCategories);
router.post('/category', createCategory);

export default router;
