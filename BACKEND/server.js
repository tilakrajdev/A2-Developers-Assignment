import express from 'express';  
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotend from 'dotenv';
import cors from 'cors';
import FormData from './model/FormData.js';
const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}

dotend.config();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/form';

mongoose.connect(MONGO_URL,)
        .then(() => {
            console.log('DB connected successfully.');
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            })
        }).catch((err) => {
            console.error('DB connection failed:', err);
        });


app.post('/api/form', (req, res) => {
    const formData = new FormData(req.body);
    formData.save()
        .then(() => {
            res.status(201).json({ message: 'Form data saved successfully.' });
        })
        .catch((err) => {
            res.status(500).json({ error: 'Failed to save form data.', details: err.message });
        });
})