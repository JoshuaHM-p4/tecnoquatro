import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({message: "Hello world"})
})

export default router;