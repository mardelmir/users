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
            const age = Math.floor(Math.random() * (50 - 20) + 20)
            const img = `../assets/img/${id}.jpeg`
            
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



    // Corrección clase

//     .then(users => {
//         const usersModified = users.map((user) => {
//             return {
//                 ...user,
//                 age: Math.floor(Math.random() * (50 - 20) + 20),
//                 img: `../assets/img/${id}.jpeg`,
//             }
//         })
//         printUsers(usersModified)
//     })
//     .catch(error => {
//         console.error(error)
//         lista.innerHTML = 'No se puede mostrar la información'
//     })

// const printUsers = (users) => {
//     users.forEach(user => {
//         const { name, age, username, img, phone, email, company, address } = user
//         const { street, suite, city } = address
//         const { name: companyName } = company

//         const userPrint = `
//         <div>
//             <div class=">
//                 <p><span>Nombre:</span>${name}</p>
//                 <p><span>Edad:</span>${age}</p>
//                 <p><span>Username:</span>${username}</p>
//                 <p><span>Teléfono:</span>${phone}</p>
//                 <p><span>Email:</span>${email}</p>
//             </div>
//             <img src="${img}" alt="${name}">
//         </div>
//         <div>
//             <p><span>Compañía:</span>${companyName}</p>
//             <p><span>Dirección:</span>${street}, ${suite}, ${city}</p>
//         </div>
//         `
//     })
// }


// cmd d (repetir la d)
// cmd mayus f (buscar en todo el proyecto)
// cl tab (console.log())
// cmd k c/u = cm shift 7 comenta y descomenta en html, css, js
// TODO extensión 
// cmd p busca entre archivos
// option shift flecha abajo (copiar y pegar)
// opt shift f (formatea)