//Array que recebe os inputs de "cadastro.html"
let dados = [
    document.querySelector('input#nome'),
    document.querySelector('input#sobrenome'),
    document.querySelector('input#email'),
    document.querySelector('input#senha'),
    document.querySelector('input#rSenha')
]

let btCadastrar = document.querySelector('input#btCadastrar')
btCadastrar.addEventListener('click', validarCadastro)

//Função que verifica se os inputs estão preenchidos 
function validarCadastro(){
    if(dados[0].value == '' || dados[1].value == '' || dados[2].value == '' || dados[3].value == '' || dados[4].value == '')
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Está faltando alguma coisa!'
          })

    } else if(dados[3].value !== dados[4].value){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Suas senhas não coincidem!'
          })

    } else{
        Swal.fire({
            icon: 'success',
            title: 'Deu certo!',
            text: 'Cadastro finalizado com sucesso!'
          }).then(()=> window.location.href = "index.html")

    }
}
