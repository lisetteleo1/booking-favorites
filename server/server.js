const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!', timestamp: new Date() });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/booking-favorites', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
