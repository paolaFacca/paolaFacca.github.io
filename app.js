//pulsante per passare da Modalità Giorno a Notte
const switcher = document.querySelector('.button');

switcher.addEventListener('click', function() {

    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')

    const className = document.body.className;

    if(className =='light-theme'){
        this.textContent = 'Modalità Notte'
    }
    else {
        this.textContent = 'Modalità Giorno'
    }

})
