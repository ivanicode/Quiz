const answers = {
    rome: 'Rzym',
    mammals: 'Dziobak',
    krakow: 'Na południu',
    continent: 'Australia',
    sentence: 'być'
}
document.body.addEventListener('change', (event) => {
    if(event.target.value === answers[event.target.id]){
        alert('Odpowiedź poprawna!')
        makeVisible()
    } else {
        alert('Odpowiedź niepoprawna :(')
    }
})

function makeVisible(){
    document.querySelector('div.visible').className = 'invisible';
    document.querySelector('div.invisible.not-touched').className = 'visible';
}
