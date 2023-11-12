import { render, screen } from '@testing-library/react';
import App from './App';
import fantasy from './Books/fantasy.json'

describe("EPICODE TESTS", () => {  
  test("Does Welcome Render Correctly?",() => {
    render(<App />);
    const Titolo = screen.getByRole('heading', {
      name: /React JS/i,
    })
    expect(Titolo).toBeInTheDocument();
  })

  test("Cards Number Correct?", () => {
    render(<App />)
    const Cards = screen.getAllByTestId('Card')
    expect(fantasy.length).toEqual(Cards.length);
  })

  test("Does CommentArea Render Correctly?",() => {
    render(<App />)
    const reviewInputField = screen.getByPlaceholderText(
      /Inserisci il tuo commento/i
    )
    expect(reviewInputField).toBeInTheDocument()
  })

  /* test("",() => {

  }) */
})
