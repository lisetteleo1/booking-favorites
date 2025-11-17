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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/booking-favorite>
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
