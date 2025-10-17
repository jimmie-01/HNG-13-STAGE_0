function errorHandler(err, req, res, next) {
	console.log('Error Handler:', err);

	//Default Error
	let error = {
		status: 'error',
		message: 'Internal Server Error',
		timestamp: new Date().toISOString()
	};
	
	let statusCode = 500;
	
	//Axios error
	if(err.isAxiosError) {
		error.message = 'Internal service unavailable';
		statusCode = 503;
	}
	
	// Error response
	res.setHeader('Content-Type', 'application/json');
	res.status(statusCode).json(error);
}

module.exports = errorHandler;