function calculoCotacoes(){
setTimeout(() => {

        fetch('https://economia.awesomeapi.com.br/json/all/USD-BRL')
            .then(res => res.json()
                .then(data => document.querySelector('#dolarHoje').innerHTML = `R$ ${data.USD.ask}`))
            .catch(e => alert(`Deu erro :( - ${e.message}`))    
    
        fetch('https://economia.awesomeapi.com.br/json/all/EUR-BRL')
            .then(res => res.json()
                .then(data => document.querySelector('#euroHoje').innerHTML = `R$ ${data.EUR.ask}`))
            .catch(e => alert(`Deu erro :( - ${e.message}`))    
            
        fetch('https://economia.awesomeapi.com.br/json/all/GBP-BRL')
            .then(res => res.json()
                .then(data => document.querySelector('#libraHoje').innerHTML = `R$ ${data.GBP.ask}`))
            .catch(e => alert(`Deu erro :( - ${e.message}`))    
       
        fetch('https://economia.awesomeapi.com.br/json/all/BTC-BRL')
            .then(res => res.json()
                .then(data => document.querySelector('#bitcoinHoje').innerHTML = `R$ ${data.BTC.ask}`))
            .catch(e => alert(`Deu erro :( - ${e.message}`))   

        fetch('https://economia.awesomeapi.com.br/json/all/CAD-BRL')
            .then(res => res.json()
                .then(data => document.querySelector('#dolarCadHoje').innerHTML = `R$ ${data.CAD.ask}`))
            .catch(e => alert(`Deu erro :( - ${e.message}`))   

        fetch('https://economia.awesomeapi.com.br/json/all/JPY-BRL')
            .then(res => res.json()
                .then(data => document.querySelector('#ieneHoje').innerHTML = `R$ ${data.JPY.ask}`))
            .catch(e => alert(`Deu erro :( - ${e.message}`))   
}, 2000);
}

document.querySelector('#dolarHoje').innerHTML = '<img src="./img/loading.gif" width="18%"/>'
document.querySelector('#euroHoje').innerHTML = '<img src="./img/loading.gif" width="18%"/>'
document.querySelector('#libraHoje').innerHTML = '<img src="./img/loading.gif" width="18%"/>'
document.querySelector('#bitcoinHoje').innerHTML = '<img src="./img/loading.gif" width="18%"/>'
document.querySelector('#dolarCadHoje').innerHTML = '<img src="./img/loading.gif" width="18%"/>'
document.querySelector('#ieneHoje').innerHTML = '<img src="./img/loading.gif" width="18%"/>'

calculoCotacoes()