# Dynamic Profile API

A RESTful API endpoint that returns profile information along with dynamic cat facts from an external API.

## Features
- GET `/me` endpoint with profile information
- Dynamic cat facts from Cat Facts API
- Real-time UTC timestamp in ISO 8601 format
- Error handling and fallback mechanisms
- Rate limiting and security headers

## Tech Stack
- **Backend**: Node/Express.js
- **HTTP Client**: Axios
- **Security**: Helmet, CORS, Rate Limiting