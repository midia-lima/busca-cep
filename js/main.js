var input = document.querySelector('input[name="cep"]');

const button = document.querySelector('#btn');
const result = document.querySelector('.infos');
const mensagemErro = document.getElementById('mensagemErro');

$("#input").mask("00000000");

function limpaCampo() {
    document.getElementById('input').value = ("");
}

function limpaRetornoEndereco() {
    result.innerHTML = `
    <p></p>
    <p></p>
    <p></p>
    <p></p>     
    `
}

button.addEventListener('click', async event => {
    event.preventDefault();

    console.log(input.value);

    const regex = /^\d{8}$/;

    if (!regex.test(input.value)) {
        mensagemErro.textContent = 'O campo deve conter 8 dígitos.';        
        return
    }   

    if (input.value == "00000000" || input.value == "12345678") {
        alert("Formato de CEP inválido")
        limpaCampo()
        limpaRetornoEndereco()
        return
    }

    else {
        mensagemErro.textContent = '';

        const response = await fetch(`https://viacep.com.br/ws/${input.value}/json/`);
        const { localidade, uf, bairro, logradouro } = await response.json();
        result.innerHTML = `
        <p>Logradouro: ${logradouro}</p>
        <p>Bairro: ${bairro}</p>
        <p>Cidade: ${localidade}</p>
        <p>Estado: ${uf}</p>     
        `
        document.querySelector('#load').innerHTML = ''
        limpaCampo()

    }

})
