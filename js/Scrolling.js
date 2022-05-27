//Identifica o clique no menu
//Referencia para o dado na pagina de acordo com o que foi clicado
//verifica distância
//anima o scroll ate o alvo

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
    
}

function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 180;
    scrollToPosition(to)

}

function scrollToPosition(to){

    window.scroll()

    window.scroll({
        top: to,
        behavior: 'smooth'
    })
}