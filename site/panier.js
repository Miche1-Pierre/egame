function open_cart() {
    let panier = document.querySelector('.sidebar');
    const anim = panier.getAttribute('class');
    if (anim == 'sidebar'){
        panier.setAttribute('class', 'sidebar_op');
    }
}

function close_cart() {
    let panier = document.querySelector('.sidebar_op');
    const anim = panier.getAttribute('class');
    if (anim == 'sidebar_op'){
        panier.setAttribute('class', 'sidebar');
    }
}
