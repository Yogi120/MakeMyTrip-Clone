const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const hotelBookingRoutes = require('./routes/hotelBookingRoutes');
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

const start = async () => {
    await connectDB();
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

app.use(express.json({ extended: false }));

// CORS configuration
const allowedOrigins = [
    'https://make-my-trip-clone-frontend.vercel.app',
    'http://localhost:3000'
];

//app.use(cors());
app.use(cors({
<<<<<<< HEAD
  origin: function (origin, callback) {
      // Allow requests with no origin, like mobile apps or curl requests
      if (!origin) return callback(null, true);
      
      // Check if the origin is in the list of allowed origins
      if (allowedOrigins.indexOf(origin) === -1) {
          const msg = 'The CORS policy for this site does not allow access from the specified origin.';
          return callback(new Error(msg), false);
      }
      return callback(null, true);
  },
  credentials: true // Allow cookies for authenticated requests (if applicable)
}));
=======
    origin: "https://make-my-trip-clone-frontend.vercel.app", // Replace with your React app's domain
// origin : "http://localhost:3000",
    credentials: true // Allow cookies for authenticated requests (if applicable)
  }));
>>>>>>> 82183de97d72488fc8b1d94bdc793f497148c8e8

// Define Routes
app.get('/',(req,res)=>{
  res.send('server running')
})
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin/flights', require('./routes/flightRoutes'));
app.use('/api/admin/hotels', require('./routes/hotelRoutes'));
app.use('/api/getallcountry', require('./routes/countryRoutes'));
app.use('/api/searchFlight', require('./routes/searchFlightRoutes'));
app.use('/api/searchHotel', require('./routes/searchHotelRoutes'));
app.use('/api', require('./routes/bookingRoutes'));
app.use('/api', hotelBookingRoutes);

start();

module.exports = app;
