
// const renderUsers = () => {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url)
//         .then(response => response.json())
//         .then(users => {
//             const list = document.querySelector('[data-id="list"]');
//             let html = '';
//             users.forEach(user => {
//                 html += `<li class="user" data-id="${user.id}">
//                             ${user.name} lives on ${user.address.street} street in ${user.address.city} and works in ${user.company.name}            
//                         </li>`
//             });
//             list.innerHTML = html;
//         })
// };

const createUsersList = users => {
    const list = document.querySelector('[data-id="list"]');
    let html = '';
    users.forEach(user => {
        html += `<li class="user" data-id="${user.id}">
                    ${user.name} lives on ${user.address.street} street in ${user.address.city} and works in ${user.company.name}            
                </li>`;
    });
    list.innerHTML = html;
}

const renderUsers = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const users = await response.json();
        createUsersList(users);
    } catch (err) {
        if (err instanceof Error) {
            console.log(`${err.name}: ${err.message}`);
        } else {
            console.log('something went wrong');
        }
    }
}

document.addEventListener('DOMContentLoaded', renderUsers);
