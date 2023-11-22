const lista = document.getElementById('listaUsuarios')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo acceder a la información')
        } return response.json()
    })
    .then(data => {
        data.forEach(element => {
            const { id, name, username, phone, email, company, address } = element
            const { street, suite, city } = address
            const { name: workplace } = company

            // He creado el array porque lo pedía el ejercicio, pero no entiendo muy bien para qué
            const object = [name, username, phone, email, workplace, street, suite, city]
            const age = Math.floor(Math.random() * (50 - 20) + 20)
            const img = `../assets/img/${id}.jpeg`
            const user = [img, age, ...object]

            const template = `
                <li>
                <div class="info">
                    <p><strong>Nombre:</strong> ${name}<br />
                    <strong>Edad:</strong> ${age}<br />
                    <strong>Username:</strong> ${username}<br />
                    <strong>Teléfono:</strong> ${phone}<br />
                    <strong>Email:</strong> ${email}</p>
                </div>
                <p><strong>Compañía:</strong> ${workplace}<br />
                <strong>Dirección:</strong> ${street}, ${suite}, ${city}</p>
                <img class="id" src="${img}" alt="${name}"/>
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

