
let dolarAuxiliar = parseFloat()
let dolarConvertido = parseFloat()
let valorDolar = document.querySelector('#valorDolar')
let valorReal = document.querySelector('#valorReal')

const recuperarDolar =  () => {
    fetch('https://economia.awesomeapi.com.br/json/all/USD-BRL')
            .then(res => res.json()
                .then(data => dolarAuxiliar = data.USD.ask))
            .catch(e => alert(`Deu erro :( - ${e.message}`))  

    // valorDolar = dolarAuxiliar*valorReal 

}
const conRealDolar = (valorReal) => {
    dolarConvertido = (valorReal*dolarAuxiliar).toFixed(2)
    valorDolar.value = dolarConvertido.toString()
}
const conDolarReal = (valorDolar) => {
    realConvertido = (valorDolar/dolarAuxiliar).toFixed(2)
    valorReal.value = realConvertido.toString()
}
recuperarDolar()