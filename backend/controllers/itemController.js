import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';


export const getItems = async(req, res) => {
    const user_id = req.user.id;
    const user = await User.findById(user_id);
    const items = {
        'email': user.email,
        'full_name': user.full_name,
        'university': user.university,
        'year_of_study': user.year_of_study,
        'hour_of_study': user.hour_of_study,
        'days_of_study': user.days_of_study,
        'role': user.role
    }

    return res.status(200).json({message: 'Data fetched sucess', data: items});
}

export const verifyToken = (req, res, next) => {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return res.status(401).json({message: 'Access denied!'})
        }

        const token = authHeader.split(' ')[1];
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
            return req.user;
        } catch(error) {
            return res.status(403).json({message: 'Invalid or expired token'})
        }
    }