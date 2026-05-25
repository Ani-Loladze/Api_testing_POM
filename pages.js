import { sendRequest } from './core.js';
 
export class AuthPage {
  async login(username, password) {
    return sendRequest('POST', '/auth', { username, password });
  }
}
 
export class BookingPage {
  async create(data)      { return sendRequest('POST',   '/booking',             data); }
  async get(id)           { return sendRequest('GET',    `/booking/${id}`            ); }
  async delete(id, token) { return sendRequest('DELETE', `/booking/${id}`, null, token); }
}
 
export class BookingFactory {
  static create() {
    return {
      firstname: 'Jane', lastname: 'Smith', totalprice: 200, depositpaid: true,
      bookingdates: { checkin: '2026-06-01', checkout: '2026-06-07' },
    };
  }
}