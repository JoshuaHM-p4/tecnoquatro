import express from 'express'
import { 
    sendAnonMsg
 } from '../controllers/anon-controller'

const router = express.Router()

router.post('/:userId', sendAnonMsg)

export default router;