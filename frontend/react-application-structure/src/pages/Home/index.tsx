import * as React from 'react';

import Layout from 'layouts/Main';
import BookingFilter from 'containers/Booking/Filter';
import BookingCardSection from 'containers/Booking/CardSection';

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <Layout title='Meeting Rooms'>
      <BookingFilter />
      <BookingCardSection />
    </Layout>
  );
};
