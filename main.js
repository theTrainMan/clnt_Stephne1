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