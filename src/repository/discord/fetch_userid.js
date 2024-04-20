export async function fetchDiscordUserIdFromName(env, name) {
    const url = `https://discord.com/api/v10/guilds/${env.DISCORD_GUILD_ID}/members/search?limit=1000&query=${name}`;
    const headers = {
        'Authorization': `Bot ${env.DISCORD_TOKEN}`
    };

    try {
        const response = await fetch(url, { headers });
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            if (data[i].nick === name || data[i].user.global_name === name) {
                return data[i].user.id;
            }
        }
        return name;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
