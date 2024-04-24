import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    studentNumber: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        // default: 'https://www.gravatar.com/avatar/
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model('User', userSchema)

export default User