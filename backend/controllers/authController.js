import User from '../models/userModel.js';
import bcrypt, { genSalt, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

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
            return res.status(200).json({message: 'User created'})
        }


    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Error creating user'})
    }
}



export const login = async(req, res) => {
    try{

    } catch{

    }
}