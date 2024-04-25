import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
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