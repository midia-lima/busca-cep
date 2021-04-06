var input = document.querySelector('input[name="cep"]');
const button = document.querySelector('#btn');
const result = document.querySelector('.infos');

function limpaCampo(){
    document.getElementById('input').value=("");
}

button.addEventListener('click', async event => {
    event.preventDefault();     
   
    if(input.value == ""){
        alert("Digite o CEP")        
        return
    }
    if(input.value == "00000000" || input.value == "12345678"){
        alert("Formato de CEP inválido")     
        limpaCampo()  
        return
    } else {

        const response = await fetch(`https://viacep.com.br/ws/${input.value}/json/`);    
        const{localidade, uf, bairro, logradouro} = await response.json();    
        result.innerHTML = `
        <p>Logradouro: ${logradouro}</p>
        <p>Bairro: ${bairro}</p>
        <p>Cidade: ${localidade}</p>
        <p>Estado: ${uf}</p>     
        `
        document.querySelector('#load'). innerHTML = ''

    }       
    
})
