const express = require('express');
const authRoutes = require('./routes/auth');
const app = express();
const cors = require('cors');

const corsOptions = {
    credentials: true,
    origin: ['http://localhost:5173']
}


app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
