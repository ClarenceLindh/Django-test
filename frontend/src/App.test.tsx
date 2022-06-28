import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

describe('App component', () => {
  test('check if header "Some Store" exists', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const buttonElement = screen.getByRole("heading", { name: /some store/i });
    expect(buttonElement).toBeInTheDocument();
  });
});