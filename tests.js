import { AuthPage, BookingPage, BookingFactory } from './pages.js';
 
const authPage    = new AuthPage();
const bookingPage = new BookingPage();
let token, bookingId;
 
//TEST 1 - Login
const authRes = await authPage.login('admin', 'password123');
console.assert(authRes.status === 200, 'Auth failed');
token = authRes.body.token;
console.log('TEST 1 HAS PASSED - Login successful');
 
//TEST 2 - Create the booking
const createRes = await bookingPage.create(BookingFactory.create());
console.assert(createRes.status === 200,                    'Create booking failed');
console.assert(createRes.body.booking.firstname === 'Jane', 'Wrong firstname');
bookingId = createRes.body.bookingid;
console.log('TEST 2 HAS  PASSED - Create one booking');
 
//TEST 3 - Get booking
const getRes = await bookingPage.get(bookingId);
console.assert(getRes.status === 200,            'Get booking has failed');
console.assert(getRes.body.firstname === 'Jane', 'Wrong firstname');
console.log('TEST 3 HAS PASSED - Get the booking');
 
//TEST 4 - Delete booking
const deleteRes = await bookingPage.delete(bookingId, token);
console.assert(deleteRes.status === 201, 'Delete failed');
console.log('TEST 4 HAS PASSED - Delete the booking');