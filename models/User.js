import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    preferences: [String],
});

const User = mongoose.model('User', userSchema);
export default User;