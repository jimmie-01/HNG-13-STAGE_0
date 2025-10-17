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

## Setup Instruction

### Prerequisites
- Node.js
- npn or yarn

### Installation

1. Clone the Repository:
```sh
$ git clone https://github.com/jimmie-01/HNG-13-STAGE_0.git
```
2. Install dependencies:
```sh
$ npm install
```
3. Create enviromental file:
```sh
$ .evn
```
4. Update `.env` with you information
```sh
$ USER_EMAIL=your.email@yourmail.com
$ USER_NAME=Your Full Name
$ USER_STACK=Node.js/Epress

5. Running Locally
- Development mode:
```sh
npm run dev
```
- Production mode:
```sh
npm start
```