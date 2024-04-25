import AnonMsg from "../models/anonmsg-model.js";

export const fetchAllAnonMsgs = async (req, res, next) => {
    const {userId} = req.params;
    try {
        const anonMsgs = await AnonMsg.find({receiver: userId})
        res.status(200).json(anonMsgs);
    } catch {
        next(error)
    }
}