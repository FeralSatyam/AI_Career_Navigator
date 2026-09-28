import User from '../models/userModel.js';
import bcrypt, { genSalt, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '7d'});
}

export const register = async(req, res) => {
    try{
        const {email, full_name, password, university, year_of_study, hour_of_study, days_of_study, role} = req.body;
        if (!email || !password ) {
            return res.status(400).json({message: 'Please add all fields'})
        }

        const userExists = await User.findOne({email});

        if (userExists){
            return res.status(400).json({message: 'User already exists!'})
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const user = await User.create({
            email, full_name, password: hashedPassword, university, year_of_study, hour_of_study, days_of_study, role
        })
        
        
        if (user){
            res.status(200).json({
                _id: user._id,
                email: user.email,
                token: generateToken(user._id),
                message: 'User created'})
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Error creating user'})
    }
}

export const login = async(req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if (user && (await bcrypt.compare(password, user.password))){
            return res.status(200).json({
                _id: user._id,
                full_name: user.full_name,
                email: user.email,
                token: generateToken(user._id),
                message: 'User logged in'});
        }

        else {
            res.status(400).json({message: 'Invalid email or password'});
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Error Logging in'})
    }
}