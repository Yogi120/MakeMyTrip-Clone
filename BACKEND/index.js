const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

const authRoutes = require('./routes/auth');
const flightRoutes = require('./routes/flightRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const countryRoutes = require('./routes/countryRoutes');
const searchFlightRoutes = require('./routes/searchFlightRoutes');
const searchHotelRoutes = require('./routes/searchHotelRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const hotelBookingRoutes = require('./routes/hotelBookingRoutes');

const start = async () => {
    await connectDB();
    app.listen(port, () => console.log(`Server running on port ${port}!`));
};

app.use(express.json({ extended: false }));

app.use(cors({
    origin: "https://make-my-trip-clone-frontend.vercel.app", // Replace with your React app's domain
    credentials: true // Allow cookies for authenticated requests (if applicable)
}));

// Define Routes
app.get('/', (req, res) => {
    res.send('Server running');
});
app.use('/api/auth', authRoutes);
app.use('/api/admin/flights', flightRoutes);
app.use('/api/admin/hotels', hotelRoutes);
app.use('/api/getallcountry', countryRoutes);
app.use('/api/searchFlight', searchFlightRoutes);
app.use('/api/searchHotel', searchHotelRoutes);
app.use('/api', bookingRoutes);
app.use('/api', hotelBookingRoutes);

start();

module.exports = app;
