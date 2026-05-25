const BASE_URL = 'https://restful-booker.herokuapp.com';
 
export async function sendRequest(method, path, body = null, token = null) {
  const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
  if (token) headers['Cookie'] = `token=${token}`;
 
  const res = await fetch(BASE_URL + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });
 
  return { status: res.status, body: await res.json().catch(() => null) };
}