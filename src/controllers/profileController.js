const catFactService = require('../services/catFactService');

class ProfileController {
	constructor() {
		this.userProfile = {
			email: process.env.USER_EMAIL || 'razaq_jimmie@yahoo.com',
			name: process.env.USER_NAME || 'Fakile Razaq',
			stack: process.env.USER_STACK || 'Backend Developer',
		};

		this.getProfile = this.getProfile.bind(this);
	}

	async getProfile(req, res, next) {
		try {
			// GET current UTC timestamp in ISO format
			const timestamp = new Date().toISOString();

			// Fetch cat fact
			const catFactResult = await catFactService.getRandomCatFact();

			let fact;

			if (catFactResult.success) {
				fact = catFactResult.fact;
			} else {
				// Fall back response if fact API fails
				fact = 'Cats share 98% of their DNA with tigers'
				console.warn(`Using fallback fact due to: ${catFactResult.error}`);
			}

			// Response Object
			const response = {
				status: 'success',
				user: this.userProfile,
				timestamp,
				fact
			}

			// Set Headers
			res.setHeader('Content-Type', 'application/json');

			console.log(`Profile request served at ${timestamp}`);

			res.status(200).json(response);
		} catch (error) {
			console.log('Profile controller error:', error);
			next(error);
		}
	}
}

module.exports = new ProfileController();