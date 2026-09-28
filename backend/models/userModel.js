import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    full_name: {
        type: String
    },
    password: {
        type: String
    },
    university: {
        type: String
    },
    year_of_study: {
        type: String
    },
    hour_of_study: {
        type: Number,
    },
    days_of_study: {
        type: String,
    },
    role: {
        type: String
    }
})

export default mongoose.model("User", userSchema);