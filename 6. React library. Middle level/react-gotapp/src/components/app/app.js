import React from 'react';
import {Col, Row, Container, Button} from 'react-bootstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharactersPage from "../charactersPage";


class App extends React.Component {
    state = {
        showRandomChar: true,
        selectedCharName: null,
    };

    handleRandomCharButton = () => {
        this.setState({showRandomChar: !this.state.showRandomChar})
    }

    render() {
        return (
            <>
            <Container >
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {this.state.showRandomChar ? <RandomChar /> : null}
                        <Button color='primary' style={{width: 250, height: 40, marginBottom: 10}} onClick={this.handleRandomCharButton}>Show random character</Button>
                    </Col>
                </Row>
                <CharactersPage />
            </Container>
        </>
        )
    }

}

export default App;