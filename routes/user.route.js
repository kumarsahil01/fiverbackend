import express from 'express'
import  {deleteuser}  from '../controllers/user.controller.js'
import { verifyToken } from '../middleware/jwt.js'
const router =express.Router()
router.delete('/:id',verifyToken, deleteuser)
router.get('/login')


export default router