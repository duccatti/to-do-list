const toDoField = document.querySelector('.to-do-field');
const toDoSend = document.querySelector('.to-do-send');
const toDoList = document.querySelector('.to-do-list');

function criali(){
    const li = document.createElement('li');
    return li;
}

function criaButtonClear(){
    const buttonClear = document.createElement("button");
    buttonClear.setAttribute('class', 'button-clear');
    buttonClear.innerText = "Deletar";
    return buttonClear;
}

function criarTarefa(li, buttonClear){
    li.innerText = toDoField.value;
    li.appendChild(buttonClear);
    toDoList.appendChild(li);
}

toDoSend.addEventListener('click', function(e){
    const li = criali();
    const buttonClear = criaButtonClear();
    criarTarefa(li, buttonClear)
});

toDoField.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        const li = criali();
        const buttonClear = criaButtonClear();
        criarTarefa(li, buttonClear)
    }
})

addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('button-clear')){
        el.parentElement.remove();
    }
});