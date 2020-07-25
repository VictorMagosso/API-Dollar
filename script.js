const axios = require('axios')

async function verificarEndereco(cep){
    try{
        //nao deu certo nao sei o motivo
        const retornoApi = await axios.get('https://economia.awesomeapi.com.br/json/all/:moedas')
        const cepTrabalhado = retornoApi.data
        console.log(typeof cepTrabalhado)

        console.log(cepTrabalhado)
    }catch (erro){
        console.log('Poxa vida! Seu CEP não existe :(')
    }
}
