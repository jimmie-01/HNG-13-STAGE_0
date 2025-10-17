const axios = require('axios');
const e = require('express');

class CatFactService {
	constructor() {
		this.apiUrl = 'https://catfact.ninja/fact';
		this.timeout = 5000; // 5 seconds timeout
	}

	async getRandomCatFact() {
		try {
			const response = await axios.get(this.apiUrl, { timeout: this.timeout });
			if (response.status === 200 && response.data && response.data.fact) {
				return {
					success: true,
					fact: response.data.fact
				};
			} else {
				return {
					success: false,
					error: 'Invalid response from Cat Fact API'
				};
			}
		} catch (error) {
			console.log('CatFactService Error:', error.message);
			
			if (error.code === 'ECONNABORTED') {
				return {
					success: false,
					error: `Cat Fact request timed out after ${this.timeout} ms`
				};
			} else if (error.response) {
				return {
					success: false,
					error: `Cat Facts API responded with status ${error.response.status}`
				};
			} else {
				return {
					success: false,
					error: 'Failed to fetch cat fact'
				};
			}
		}
	}
}

module.exports = new CatFactService();