
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import problemRoutes from './routes/problemRoutes';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/problems', problemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
