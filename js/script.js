const lista = document.getElementById('listaUsuarios')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo acceder a la información')
        } return response.json()
    })
    .then(data => {
        console.log(data)
        data.forEach((element) => {
            const { id, name, username, phone, email, company, age = Math.floor(Math.random() * 66), address } = element
            const { street, suite, city } = address
            const template = `
                <li>
                <div class="info">
                    <p><strong>Nombre:</strong> ${name}<br />
                    <strong>Edad:</strong> ${age}<br />
                    <strong>Username:</strong> ${username}<br />
                    <strong>Teléfono:</strong> ${phone}<br />
                    <strong>Email:</strong> ${email}</p>
                </div>
                <img class="id" src="../assets/img/${id}.jpeg" alt="${name}"/>
                <p><strong>Compañía:</strong> ${company.name}<br />
                <strong>Dirección:</strong> ${street}, ${suite}, ${city}</p>
                </li>
                `
            lista.innerHTML += template
        })
    })
    .catch(error => {
        const errorMsg = document.createElement('li');
        errorMsg.textContent = 'No se puede mostrar la información'
        lista.appendChild(errorMsg)
    })

