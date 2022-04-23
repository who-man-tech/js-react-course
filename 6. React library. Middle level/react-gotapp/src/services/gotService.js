export default class GotService {
    constructor() {
        this.apiUrl = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this.apiUrl}${url}`);

        if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`);

        return await res.json();
    }

    getAllCharacters = async () => {
        return await this.getResource('/characters');
    }

    getCharacter = async (id) => {
        return await this.getResource(`/characters/${id}`);
    }
}