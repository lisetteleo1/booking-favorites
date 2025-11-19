const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { errorHandler } = require("./middleware/errorHandler.js"); // <--- added

const app = express();
const PORT = process.env.PORT || 3000;

// CORS Settings
app.use(
  cors({
    origin: "http://localhost:4200", // Angular frontend URL
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Hotel Schema
const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  city: String,
  country: String,
  price: Number,
  rating: Number,
  imageUrl: String,
  bookingUrl: String,
  description: String,
  amenities: [String],
  dateAdded: { type: Date, default: Date.now }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!', timestamp: new Date() });
});

// Get all favorite hotels
app.get('/api/favorites', async (req, res) => {
  try {
    const hotels = await Hotel.find().sort({ dateAdded: -1 });
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a favorite hotel
app.post('/api/favorites', async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).json(hotel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a favorite hotel
app.delete('/api/favorites/:id', async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Hotel deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/booking-favorites')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Error:', err));

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});