import React, {Component} from 'react';
import ItemList from "../../itemList";
import GotService from "../../../services/gotService";
import ItemDetails, {Field} from "../../itemDetails";
import RowBlock from "../../rowBlock";

export default class BooksPage extends Component {
    gotService = new GotService();

    state = {
        booksList: null,
        book: null,
    }

    componentDidMount() {
        this.gotService.getAllBooks()
            .then(data => this.setState({booksList: data}));
    }

    onCharSelected = (item) => {
        const item_id = item.url.split('/').splice(-1).pop();
        this.gotService.getBook(item_id).then(data => this.setState({book: data}));
    }

    render() {
        const booksList = (
            <ItemList
                itemList={this.state.booksList}
                onItemSelected={this.onCharSelected}
                renderItem={(item) => item.name}
            />
        );

        const bookDetails = (
            <ItemDetails item={this.state.book}>
                <Field field='released' label='Released'/>
                <Field field='mediaType' label='Type'/>
                <Field field='country' label='Country'/>
                <Field field='publisher' label='Publisher'/>
            </ItemDetails>
        );
        return <RowBlock left={booksList} right={bookDetails} />;
    }
}