import mongoose from "mongoose";

mongoose.set("strictQuery", false)

const connectDB = async () => {
    return await mongoose.connect(process.env.MONGO_URI)
}

export default connectDB