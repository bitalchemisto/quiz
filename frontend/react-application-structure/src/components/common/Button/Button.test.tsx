import { fireEvent, render, waitFor } from 'test.utils';
import { Route } from 'react-router-dom';
import { AppButton } from './Button';

const clickEvent = jest.fn();

let Component = (
  <Route
    path='/'
    render={(props) => (
      <AppButton {...props} onClick={clickEvent} id='test'>
        Primary
      </AppButton>
    )}
  />
);

describe('Button', () => {
  test('Button | Renders without errors', async () => {
    render(Component);
  });
  test('Button | Onclick event is working', async () => {
    let { getByRole } = render(Component);
    const btnElement = getByRole('button', { name: 'Primary' });
    fireEvent.click(btnElement);
    await waitFor(() => expect(clickEvent).toHaveBeenCalled());
  });
});
