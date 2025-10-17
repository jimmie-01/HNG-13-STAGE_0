require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit =  require('express-rate-limit');

const profileRoutes = require('./routes/profileRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middleware
app.use(helmet());

//CORS configuration
app.use(cors({
	origin: process.env.ALLOWED_ORIGINS || '*',
	methods: ['GET']
}));

// Rate limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100 // Limits each IP to 100 request per windowMs
});
app.use(limiter);

// Routes
app.use('/', profileRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;