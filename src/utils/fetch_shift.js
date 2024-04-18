import https from 'https';

export async function fetchUserIdFromName(SHEET_ID , GAPI_TOKEN, name) {
	return new Promise((resolve, reject) => {
		const options = {
			hostname: 'docs.google.com',
			port: 443,
			path: `/spreadsheets/d/${SHEET_ID}/edit#gid=0`,
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${GAPI_TOKEN}`,
				'Accept': 'application/json',
			}
		};
		const req = https.request(options, res => {
			let data = '';

			res.on('data', chunk => {
				data += chunk;
			});

			res.on('end', async () => {
				data = JSON.parse(data);
				for (let i = 0; i < data.length; i++) {
					if (data[i].nick === name || data[i].user.global_name === name) {
						resolve(data[i].user.id);
						return
					}
				}
				resolve(name);
			});
		});

		req.on('error', error => {
			console.error(error);
			reject(error);
		});

		req.end();
	})
}

