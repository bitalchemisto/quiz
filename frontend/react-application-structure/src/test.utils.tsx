import { render as rtlRender, configure } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import reducers from './store/reducers';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';

configure({ testIdAttribute: 'id' });

function render(
  ui,
  {
    initialState = {},
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    store = createStore(reducers, initialState, applyMiddleware()),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: any) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
    history
  };
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
