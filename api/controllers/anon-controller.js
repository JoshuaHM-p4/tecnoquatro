import User from '../models/user-model';
import AnonMsg from '../models/anon-model';

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
    } catch (error) {
        next(error)
    }
}