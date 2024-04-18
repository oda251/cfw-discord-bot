const axios = require('axios');

const CLIENT_ID = ***
const CLIENT_SECRET = ***
const REFRESH_TOKEN = ***
const SCRIPT_ID = ***

/**
* メイン関数
* @return string
*/
async function main() {
try {
// アクセストークンを取得する
const accessToken = await getAccessToken();

// GASを実行
const url = `https://script.googleapis.com/v1/scripts/${SCRIPT_ID}:run`;
const headers = {
Authorization: `Bearer ${accessToken}`,
};
const payload = {
function: 'myFunction',
parameters: ['Hello, world!']
};
// リクエスト
const instance = axios.create({ headers });
const response = await instance.post(url, payload);

if (response.status !== 200 || !response.data || response.data.error) {
throw new Error('Failed to run google apps script.');
}

const { result } = response.data.response;
console.log(result);
} catch (e) {
throw e;
}
}

/**
* アクセストークンを取得する関数
* @return string
*/
async function getAccessToken() {
const payload = {
client_id: CLIENT_ID,
client_secret: CLIENT_SECRET,
refresh_token: REFRESH_TOKEN,
grant_type: 'refresh_token',
};
// リクエスト
const response = await axios.post(TOKEN_URL, payload);

if (response.status !== 200 || !response.data) {
throw new Error('Failed to get access token.');
}

const accessToken = response.data.access_token;
return accessToken;
}

main();