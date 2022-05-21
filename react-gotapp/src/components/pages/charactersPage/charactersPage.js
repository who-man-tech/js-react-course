import React, {Component} from 'react';
import ItemList from "../../itemList";
import GotService from "../../../services/gotService";
import ItemDetails, {Field} from "../../itemDetails";
import RowBlock from "../../rowBlock";

export default class CharactersPage extends Component {
    gotService = new GotService();

    state = {
        charactersList: null,
        character: null,
    }

    componentDidMount() {
        this.gotService.getAllCharacters(Math.floor(Math.random() * 100) + 1)
            .then(data => this.setState({charactersList: data}));
    }

    onCharSelected = (item) => {
        const item_id = item.url.split('/').splice(-1).pop();
        this.gotService.getCharacter(item_id).then(data => this.setState({character: data}));
    }

    render() {
        const charactersList = (
            <ItemList
                itemList={this.state.charactersList}
                onItemSelected={this.onCharSelected}
                renderItem={(item) => item.name}
            />
        );

        const charDetails = (
            <ItemDetails item={this.state.character}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        );
        return <RowBlock left={charactersList} right={charDetails} />;
    }
}