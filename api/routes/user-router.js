import express from 'express';
import {
    fetchAllAnonMsgs
} from '../controllers/user-controller.js'

const router = express.Router();

router.get('/:userId', fetchAllAnonMsgs)

export default router;
