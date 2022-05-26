export default class RestoService {
    apiUrl = 'http://0.0.0.0:3001';

    getResource = async (url, timeout = 5000) => {
        const abortController = new AbortController();
        const timeoutId = setTimeout(() => abortController.abort(), timeout);

        const res = await fetch(`${this.apiUrl}${url}`, {signal: abortController.signal});
        clearTimeout(timeoutId);

        if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`);
        return await res.json();
    }

    getMenuItems = async () => {
        return await this.getResource('/menu');
    }

    getMenuItem = async (id) => {
        return await this.getResource(`/menu/${id}`);
    }
}