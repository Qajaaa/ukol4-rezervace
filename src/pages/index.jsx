import { render } from '@czechitas/render';
import { bookingData } from '../components/BookingData/BookingData.jsx';
import { BookingSummary } from '../components/BookingSummary/BookingSummary.jsx';

document.querySelector('#root').innerHTML = render(
  <BookingSummary data={bookingData} />
   
 
);
