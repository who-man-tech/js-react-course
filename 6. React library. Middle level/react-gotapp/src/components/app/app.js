import React from 'react';
import {Col, Row, Container, Button} from 'react-bootstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showRandomChar: true
        };
    }

    handleRandomCharButton = (event) => {
        this.setState({showRandomChar: !this.state.showRandomChar}, () => console.log(this.state))
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
                        {this.state.showRandomChar ? <RandomChar showRandomChar={this.state.showRandomChar} /> : null}
                        <Button color='primary' style={{width: 250, height: 40, marginBottom: 10}} onClick={this.handleRandomCharButton}>Show random character</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
        )
    }

}

export default App;