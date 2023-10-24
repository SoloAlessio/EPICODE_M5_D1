import { Container, Jumbotron, Button } from 'react-bootstrap'

function Welcome() {
        return (
            <Jumbotron>
                <Container>
                    <h1>La Mia Prima Applicazione React</h1>
                    <p className="lead">
                        Questo è un jumbotron, un elemento di grande evidenza che viene spesso utilizzato per presentare un'offerta o un messaggio importante.
                    </p>
                    <Button variant='primary'>Clicca Qui</Button>
                </Container>
            </Jumbotron>
        )
}

export default Welcome