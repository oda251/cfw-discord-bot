import { config } from 'dotenv';

config({ path: '.dev.vars' });

export const MOCK_ENV = {
	DISCORD_GUILD_ID: process.env.DISCORD_GUILD_ID,
	DISCORD_CHANNEL_ID: process.env.DISCORD_CHANNEL_ID,
	DISCORD_TOKEN: process.env.DISCORD_TOKEN,
	GAPI_CLIENT_ID: process.env.GAPI_CLIENT_ID,
	GAPI_CLIENT_SECRET: process.env.GAPI_CLIENT_SECRET,
	GAPI_REFRESH_TOKEN: process.env.GAPI_REFRESH_TOKEN,
	GAS_URL: process.env.GAS_URL,
};
