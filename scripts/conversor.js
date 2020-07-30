let valorDolar = document.querySelector('#valorDolar').value
let valorReal = document.querySelector('#valorReal').value
let dolarAuxiliar = ''

const buttonCalcular =  () => {
    fetch('https://economia.awesomeapi.com.br/json/all/USD-BRL')
            .then(res => res.json()
                .then(data => dolarAuxiliar = Number(data.USD.ask)))
            .catch(e => alert(`Deu erro :( - ${e.message}`))  

    valorDolar = dolarAuxiliar*valorReal 
    alert(valorDolar)
}