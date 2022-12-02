const toDoField = document.querySelector('.to-do-field');
const toDoSend = document.querySelector('.to-do-send');


function criali(){
    const li = document.createElement('li');
    return li;
}

function criaButtonClear(){
    const buttonClear = document.createElement("button");
    buttonClear.setAttribute('class', 'button-clear bi bi-trash');
    return buttonClear;
}

function criaDivList(){
    const container = document.querySelector(".container")
    const divList = document.createElement("div")
    divList.setAttribute('class', 'list')
    divList.appendChild(container)
    return divList
}

function criaUlList(divList){
    const ulList = document.createElement('ul')
    ulList.setAttribute('class', 'to-do-list')
    ulList.appendChild(divList)
    return ulList
}

function criarTarefa(li, buttonClear, ulList){
    li.innerText = toDoField.value;
    li.appendChild(buttonClear);
    ulList.appendChild(li);
}

toDoSend.addEventListener('click', function(e){
    if (toDoField.value != ""){
        const divList = criaDivList();
        const ulList = criaUlList(divList);
        const li = criali();
        const buttonClear = criaButtonClear();
        criarTarefa(li, buttonClear, ulList)
    } else {
        alert("Favor inserir o nome da tarefa!")
    }
});

toDoField.addEventListener('keyup', function(e){
    if(e.keyCode === 13 && toDoField.value != ""){
        const li = criali();
        const buttonClear = criaButtonClear();
        criarTarefa(li, buttonClear)
    }
    if(e.keyCode === 13 && toDoField.value == ""){
        alert("Favor inserir o nome da tarefa!")
    }
})

addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('button-clear')){
        el.parentElement.remove();
    }
});