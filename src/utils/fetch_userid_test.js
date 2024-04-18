import { fetchUserIdFromName } from './fetch_userid.js';
import { config } from 'dotenv';

config({ path: '.dev.vars' });

const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const id = await fetchUserIdFromName(DISCORD_GUILD_ID, DISCORD_TOKEN, 'aa');
console.log(id);