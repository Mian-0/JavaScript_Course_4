// Variable

const accordino = document.getElementsByClassName('content-container');

for(i = 0; i < accordino.length; i++) {

    accordino[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });

};