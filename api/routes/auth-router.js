import express from 'express';
import errorValidation from '../utils/errorHandler';

const router = express.Router();

router.get('/signup', (req, res, next) => {
    const {username, email, password, confirmPassword} = req.body;
    try {
        if (!username || !email || !password || !confirmPassword) {
            return next(errorValidation(400, 'All fields are required'));
        }
        if (password !== confirmPassword) {
            return next(errorValidation(400, 'Passwords do not match'));
        }
    } catch (error) {
        next(error)
    }
})

export default router;