import { User } from "../models/user.model.js";

export const getAllUser = async (req, res, next) => {
    try {
        const currentUserId = req.auth.userId;
        const users = await User.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
};