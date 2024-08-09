const form=document.getElementById("form")
const contatos=[]
let linhas=''
form.addEventListener('submit', function(e){
    e.preventDefault()
    add()
    atualizaTabela()
})
function add(){
    const inputNome =document.getElementById("nomes")
    const inputNumero = document.getElementById("numeros")
    contatos.push({
        nome:inputNome.value,
        numero:inputNumero.value
    })
    inputNome.value=''
    inputNumero.value=''

}
function atualizaTabela (){
    contatos.sort((a,b)=> a.nome.localeCompare(b.nome))
    let linhas=''
    contatos.forEach(contato=>{
        linhas+=`<tr>`
        linhas+=`<td>${contato.nome}</td>`
        linhas+=`<td><a href="tel:${contato.numero}">${contato.numero}</a></td>`
        linhas+=`</tr>`
    })
    const corpoTabela=document.querySelector('tbody')
    corpoTabela.innerHTML=linhas
}
