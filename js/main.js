const input = document.querySelector('input[name="cep"]');
const button = document.querySelector('#btn');
const result = document.querySelector('.infos');

button.addEventListener('click', async event => {

    event.preventDefault();

    document.querySelector('#load').innerHTML = 'Buscando...'

    const response = await fetch(`https://cleantech.ga/cep/${input.value}`);       

    const{cidade, estado, bairro, logradouro} = await response.json();    

    result.innerHTML = `
    <p>Logradouro: ${logradouro}</p>
    <p>Bairro: ${bairro}</p>
    <p>Cidade: ${cidade}</p>
    <p>Estado: ${estado}</p>     
    `

    document.querySelector('#load'). innerHTML = ''    
    
})
