import BookingCard from 'components/Booking/Card';

const DEMO_CARDS = [];

export const BookingCardSection: React.FunctionComponent<{}> = (props) => {
  return (
    <>
      {DEMO_CARDS.map(() => (
        <BookingCard />
      ))}
    </>
  );
};
