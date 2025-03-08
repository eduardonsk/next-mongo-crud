import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected");
    } catch (error) {
        console.log("Error mongoose", error.message);
    }
}

export default connectMongoDB;