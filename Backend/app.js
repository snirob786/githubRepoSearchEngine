// Dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Initialize Express App
const app = express();
const port = process.env.PORT || '5000';
app.set('port', port);

// Register Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Import Routes and Middleware
app.use('/', require('./modules/github'));

// Set Port and Start Server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

// Export App
module.exports = app;
