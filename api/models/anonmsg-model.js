import mongoose from "mongoose";

const anonMsgSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    receiver: {
        type: String,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const AnonMsg = mongoose.model('AnonMsg', anonMsgSchema)

export default AnonMsg