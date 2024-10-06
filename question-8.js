// Question #8: Fetching User List from Server

async function fetcUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const users = await response.json();
        const newusers = users.map(user => user.name);
        console.log(newusers);
    } catch (error) {
        console.error('there was a problem with the fetch operation:', error);
    }
}

fetcUsers();
