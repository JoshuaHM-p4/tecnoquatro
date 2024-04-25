import express from 'express'
import { 
    sendAnonMsg
 } from '../controllers/anon-controller.js'

const router = express.Router()

router.post('/:userId', sendAnonMsg)

export default router;