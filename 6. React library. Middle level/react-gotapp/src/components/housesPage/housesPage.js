import React, {Component} from 'react';
import ItemList from "../itemList";
import GotService from "../../services/gotService";
import ItemDetails, {Field} from "../itemDetails";
import RowBlock from "../rowBlock";


export default class HousesPage extends Component {
    gotService = new GotService();

    state = {
        housesList: null,
        house: null,
    }

    componentDidMount() {
        this.gotService.getAllHouses(Math.floor(Math.random() * 100) + 1)
            .then(data => this.setState({housesList: data}));
    }

    onCharSelected = (item) => {
        const item_id = item.url.split('/').splice(-1).pop();
        this.gotService.getCharacter(item_id).then(data => this.setState({house: data}));
    }

    render() {
        const housesList = (
            <ItemList
                itemList={this.state.housesList}
                onItemSelected={this.onCharSelected}
                renderItem={(item) => item.name}
            />
        );

        const houseDetails = (
            <ItemDetails item={this.state.house}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        );
        return <RowBlock left={housesList} right={houseDetails} />;
    }
}