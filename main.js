//JQuery to stretch the header across the screen
$(document).ready(function() {
    $('.header').height($(window).height());
})

var ready = (callback) => {
    if (document.readyState != 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
}
ready(() => {
    document.querySelector('.header').getElementsByClassName.height = window.innerHeight + 'px';
})

setTimeout(function() {
    $('#subscribe-modal').modal();
}, 1000);

/*************** subscribe click event to open Modal ******************/

const subscribeClick = document.getElementById('subscribe')

function subscribeEvent() {
    alert('Congratulations')
}

subscribeClick.addEventListener('click', subscribeEvent)