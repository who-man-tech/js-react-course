export default class RestoService {
    apiUrl = 'http://0.0.0.0:3001';

    getResource = async (url) => {
        const res = await fetch(`${this.apiUrl}${url}`);

        if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`);

        return await res.json();
    }

    getMenuItems = async () => {
        return await this.getResource('/menu');
    }
}