fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const list = document.querySelector('[data-id="list"]');
        let html = '';
        users.forEach(user => {
            html += `<li class="user" data-id="${user.id}">
                        ${user.name} lives on ${user.address.street} street in ${user.address.city} and works in ${user.company.name}            
                    </li>`
        });
        list.innerHTML = html;
    })