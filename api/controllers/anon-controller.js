import User from '../models/user-model.js';
import AnonMsg from '../models/anonmsg-model.js';
import {errorHandler} from '../utils/errorHandler.js'

export const sendAnonMsg = async (req, res, next) => {
    const {userId} = req.params;
    try {
        const userExists = await User.findById(userId)
        if (!userExists) {
            return next(errorHandler(404, 'User not found'));
        }
        const anonMsg = new AnonMsg({
            receiver: userId,
            message: req.body.message,
        });
        anonMsg.save();
        res.status(201).json("Anonymous message sent");
    } catch (error) {
        next(error)
    }
}