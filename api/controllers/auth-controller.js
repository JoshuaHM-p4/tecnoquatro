import User from '../models/user-model.js';
import {errorHandler} from '../utils/errorHandler.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res, next) => {
    const {username, email, password, confirmPassword} = req.body;
    try {
        const userExists = await User.findOne({email});
        if (userExists) {
            return next(errorHandler(400, 'User already exists'));
        }
        if (!username || !email || !password || !confirmPassword) {
            return next(errorHandler(400, 'All fields are required'));
        }
        if (password !== confirmPassword) {
            return next(errorHandler(400, 'Passwords do not match'));
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword,
        });
        await user.save();
        res.status(201).json("User added");
    } catch (error) {
        next(error)
    }
}

export const signIn = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) return next(errorHandler(404, 'User not found!'));
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return next(errorHandler(401, 'Invalid credentials!'));
        const token = jwt.sign(
            {id: user._id}, 
            process.env.JWT_SECRET, 
        );
        const { password: pass , ...rest} = user._doc
        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json(rest);
    } catch (error) {
        next(error);
    }       
}

export const logout = async (req, res, next) => {
    res.clearCookie('access_token').status(200).json({message: 'Logged out'});
}