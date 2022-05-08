import React, {Component} from 'react';
import ItemList from "../itemList";
import GotService from "../../services/gotService";
import ItemDetails, {Field} from "../itemDetails";
import RowBlock from "../rowBlock";


export default class BooksPage extends Component {
    gotService = new GotService();

    state = {
        booksList: null,
        book: null,
    }

    componentDidMount() {
        this.gotService.getAllBooks(Math.floor(Math.random() * 100) + 1)
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
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        );
        return <RowBlock left={booksList} right={bookDetails} />;
    }
}