export async function accessGasApi(env, payload) {
    const accessToken = await getAccessToken(env);

    const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    };

    const response = await fetch(env.GAS_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
    });

    if (response.status !== 200) {
        throw new Error('Failed to run google apps script.');
    }
    const data = await response.json();
    if (!data || data.error) {
        throw new Error('Failed to run google apps script.');
    }
    const { result } = data.response;
    return result;
}

async function getAccessToken(env) {
    const payload = {
        client_id: env.GAPI_CLIENT_ID,
        client_secret: env.GAPI_CLIENT_SECRET,
        refresh_token: env.GAPI_REFRESH_TOKEN,
        grant_type: 'refresh_token',
    };
    const TOKEN_URL = 'https://oauth2.googleapis.com/token';
    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload),
    });

    if (response.status !== 200) {
        throw new Error('Failed to get access token.');
    }
    const data = await response.json();
    const accessToken = data.access_token;
    return accessToken;
}
