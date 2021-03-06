export default class GotService {
    constructor() {
        this.apiUrl = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this.apiUrl}${url}`);

        if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`);

        return await res.json();
    }

    getAllCharacters = async (page=1, pageSize=10) => {
        return await this.getResource(`/characters?page=${page}&pageSize=${pageSize}`);
    }

    getCharacter = async (id) => {
        return await this.getResource(`/characters/${id}`);
    }

    getAllBooks = async () => {
        return await this.getResource('/books');
    }

    getBook= async (id) => {
        return await this.getResource(`/books/${id}`);
    }

    getAllHouses = async (page=1, pageSize=10) => {
        return await this.getResource(`/houses?page=${page}&pageSize=${pageSize}`);
    }

    getHouse= async (id) => {
        return await this.getResource(`/houses/${id}`);
    }
}