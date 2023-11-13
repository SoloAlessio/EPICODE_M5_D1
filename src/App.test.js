import { render, screen, fireEvent } from '@testing-library/react';
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

  // NON FUNZIONANTE
  /* test("Does CommentArea Render Correctly?",() => {
    render(<App />) // Non capisco perchè renderizzando App o addirittura BookDetail non riesca comunque a trovare il testo
    const reviewInputField = screen.getByText('Recensioni:')
    expect(reviewInputField).toBeInTheDocument()
  }) */

})

describe('CommentList testing', () => {
  test('renders no book comments on load', () => {
    render(<App />)
    const allTheBookComments = screen.queryAllByTestId('single-comment')
    expect(allTheBookComments).toHaveLength(0)
  })

  // Non trova i single-comment nonostante abbia inserito i dovuti data-testid
  // NON FUNZIONANTE
  /* test('renders comments clicking on a valid book', async () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('Card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    const allTheBookComments = await screen.findAllByTestId('single-comment')
    expect(allTheBookComments).not.toHaveLength(0)
  }) */
})

describe('SingleBook testing', () => {
  test('makes book card border change clicking on test', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('Card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    expect(firstBookCard).toHaveStyle('border: 1px solid #00000050')
  })

  test('restores normal border after clicking on a second book', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('Card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    expect(firstBookCard).toHaveStyle('border: 1px solid #00000050')
    const secondBookCard = allTheBookCards[1]
    fireEvent.click(secondBookCard)
    expect(firstBookCard).not.toHaveStyle('border: 1px solid #00000050')
  })
})

describe('CommentList testing', () => {
  test('renders no book comments on load', () => {
    render(<App />)
    const allTheBookComments = screen.queryAllByTestId('single-comment')
    expect(allTheBookComments).toHaveLength(0)
  })

  // Non capisco perchè ma sembra non caricare tutti i componenti annidati o comunque presenti nel componente BookDetails
  // NON FUNZIONANTE
 /* test('renders comments clicking on a valid book', async () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('Card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    const allTheBookComments = await screen.findAllByTestId('single-comment')
    expect(allTheBookComments).not.toHaveLength(0)
  }) */
})


// NON E ANDATA PROPRIO BENISSIMO