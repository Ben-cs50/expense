import express from "express"
import {listCategories} from '../controllers/categories.controller.js'
import {createCategory} from '../controllers/categories.controller.js'
import {createCategoryRule} from '../controllers/categories.controller.js'
import {listCategoryRule} from '../controllers/categories.controller.js'

const router =express.Router();

router.get('/categories', listCategories);
router.post('/category', createCategory);
router.get('/category-rules', listCategoryRule);
router.post('/category-rules', createCategoryRule);


export default router;
