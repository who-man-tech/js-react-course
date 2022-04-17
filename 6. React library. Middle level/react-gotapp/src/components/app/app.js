import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showRandomChar: false,
        };
    }

    handleRandomCharButton = (event) => {
        this.setState({
            showRandomChar: !this.state.showRandomChar
        });
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
                        {this.state.showRandomChar ? <RandomChar class="random-char"/> : null}
                        <Button color='primary' style={{width: 200, height: 40, margin: 10}} onClick={this.handleRandomCharButton}></Button>
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