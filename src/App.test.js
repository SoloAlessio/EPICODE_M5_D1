import { render, screen, describe } from '@testing-library/react';
import App from './App';


describe(() => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/La mia prima applicazione React/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("Does Welcome Render Correctly?",() => {
    
  })
})
