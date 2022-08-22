import { screen, render } from "@testing-library/react"
import Home from './index'

test('search input should rendered',  () => {
    render(<Home />);
    const serach = screen.getByTestId("search"); 
    expect(serach).toBeInTheDocument()}
)

test('image pokemon should rendered',  () => {
    render(<Home />);
    const pokemonBanner = screen.getByTestId("pokemon-banner"); 
    expect(pokemonBanner).toBeInTheDocument()}
)
