
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);
        console.log('MongoDB connected');
    } catch (error: any) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;
