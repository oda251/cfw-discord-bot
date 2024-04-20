export async function sendMessageToChannel(env, message) {
	const url = `https://discord.com/api/v10/channels/${env.DISCORD_CHANNEL_ID}/messages`;
	const headers = {
		'Authorization': `Bot ${env.DISCORD_TOKEN}`,
		'Content-Type': 'application/json',
	};
	const body = JSON.stringify({
		content: message,
	});

	const response = await fetch(url, {
	  method: 'POST',
	  headers,
	  body,
	});

	if (!response.ok) {
		console.log(await response.text());
		throw new Error('Failed to send message');
	}
}
