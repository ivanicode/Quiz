
let pkt = 0;

const answers = {
    rome: 'Rzym',
    platypus: 'Dziobak',
    south: 'Na południu',
    australia: 'Australia',
    be: 'być'
}

document.body.addEventListener('change', (event) => {
    
    if(event.target.value === answers[event.target.id]){

        //windowOnClick(event);
        const positiveText = document.querySelector('.modal-text')
        positiveText.textContent = 'Dobra odpowiedź!'
        makeModalVisible();
        pkt += 100;
        makeVisible()
        
    } else {
        
        //windowOnClick(event);
        const positiveText = document.querySelector('.modal-text')
        positiveText.textContent = 'Spróbuj jeszcze raz.'
        makeModalVisible();
    }
})

function showCongratz(){
    const congratz = document.getElementsByClassName('congratz');
    
    congratz.textContent = 'Gratulacje, otrzymałeś ' + pkt + ' punktów!'
    
}

function makeModalVisible(){
    console.log('visible')
    document.querySelector('.invisible.modal').className = 'visible modal'
}

function makeModalInvisible(){
    console.log('invisible')
    document.querySelector('.visible.modal').className = 'invisible modal'
}

function makeVisible(){
    document.querySelector('div.visible').className = 'invisible';
    const firstInvisible = document.querySelector('div.invisible.not-touched');
    console.log(firstInvisible)
    if(firstInvisible.className.includes('end')){
        showCongratz();
    }
    firstInvisible.className = 'visible';
}
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");



function windowOnClick(event) {
    console.log(event.target.className)
    if (event.target.className === 'close-button' || event.target.className === 'visible modal') {
        makeModalInvisible();
    }
}


window.addEventListener("click", windowOnClick);
