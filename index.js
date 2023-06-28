let consulta = document.querySelector('#consulta')
let rua_cep = document.querySelector('#rua_cep')
let cidade_cep = document.querySelector('#cidade_cep')
let bairro_cep = document.querySelector('#bairro_cep')
let estado_cep = document.querySelector('#estado_cep')


consulta.addEventListener('click', ()=>{
    let numcep = document.querySelector('#numcep').value
    console.log(numcep)
    const cep = new XMLHttpRequest()
    cep.open('GET', 'https://viacep.com.br/ws/'+numcep+'/json/')
    cep.send()
    console.log(cep)
    
    cep.onload = function(){
        let pesq_cep = JSON.parse(cep.responseText)
        console.log(pesq_cep)
        

        if(pesq_cep.logradouro === undefined){
            alert("Essa cidade não existi")
        }else if(pesq_cep.logradouro != ''){
            cidade_cep.setAttribute('value',pesq_cep.localidade);
            rua_cep.setAttribute('value',pesq_cep.logradouro);
            bairro_cep.setAttribute('value',pesq_cep.bairro);
            estado_cep.value = (pesq_cep.uf)
        }else{
            cidade_cep.setAttribute('value',pesq_cep.localidade);
            rua_cep.setAttribute('value',pesq_cep.logradouro);
            bairro_cep.setAttribute('value',pesq_cep.bairro);
            estado_cep.value = (pesq_cep.uf)
        }
    }
})