

const answers = {
    rome: 'Rzym',
    platypus: 'Dziobak',
    south: 'Na południu',
    australia: 'Australia',
    be: 'być'
}

document.body.addEventListener('change', (event) => {
    console.log(event.target.value)
    console.log(answers[event.target.id])
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
