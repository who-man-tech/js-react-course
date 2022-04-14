let get_url = 'https://jsonplaceholder.typicode.com/posts/1',
    wrong_get_url = 'https://jsonplaceholder.typicode.com/posts/1000'
    post_url = 'https://jsonplaceholder.typicode.com/posts'
    data = {username: 'someusername'};


// Sync Get data from server
fetch(get_url)
    .then(r => r.json())
    .then(json_data => console.log(json_data))


// Send data to server
fetch(post_url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
    }).then(r => r.json())
    .then(json_data => console.log('Success', json_data))
    .catch(error => console.log('Error', error))


const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json();
}
// Async get data from server
getResource(get_url).then(json_data => console.log(json_data))
// Async get data from server by wrong url
getResource(wrong_get_url).then(json_data => console.log(json_data))