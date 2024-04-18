import https from 'https';

export async function fetchUserIdFromName(DISCORD_GUILD_ID, DISCORD_TOKEN, name) {
	return new Promise((resolve, reject) => {
		const options = {
			hostname: 'discord.com',
			port: 443,
			path: `/api/v10/guilds/${DISCORD_GUILD_ID}/members/search?limit=1000&query=${name}`,
			method: 'GET',
			headers: {
				'Authorization': `Bot ${DISCORD_TOKEN}`
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

