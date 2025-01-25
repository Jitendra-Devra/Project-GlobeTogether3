import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const { JWT_SECRET } = process.env;

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Authorization header missing or malformed' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        // Fetch the user from the database and attach it to the request object
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;

        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};
