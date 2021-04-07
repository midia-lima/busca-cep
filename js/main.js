var input = document.querySelector('input[name="cep"]');
const button = document.querySelector('#btn');
const result = document.querySelector('.infos');
$("#input").mask("00000-000");

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

    if (input.value == "") {
        alert("Digite o CEP")
        limpaRetornoEndereco()
        return
    }
    if (input.value == "00000-000" || input.value == "12345-678") {
        alert("Formato de CEP inválido")
        limpaCampo()
        limpaRetornoEndereco()
        return
    } else {

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
