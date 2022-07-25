// Variables

let openBtn = document.getElementById('open-btn');
let modalCotainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function(){

    modalCotainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){

    modalCotainer.style.display = 'none';
});

window.addEventListener('click', function(e){

    if(e.target === modalCotainer) {
        modalCotainer.style.display = 'none'
    }
});