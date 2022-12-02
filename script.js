const toDoField = document.querySelector('.to-do-field');
const toDoSend = document.querySelector('.to-do-send');
const toDoList = document.querySelector('.to-do-list');
const container = document.querySelector(".container");

function criali(){
    const li = document.createElement('li');
    //toDoList.appendChild(li);
    return li;
}

function criaButtonClear(li){
    const buttonClear = document.createElement("button");
    buttonClear.setAttribute('class', 'button-clear bi bi-trash');
    li.appendChild(buttonClear);
    return buttonClear;
}

function limpaInput(){
    toDoField.value = ""
    toDoField.focus()
}

/*function criaDivList(container){
    const divList = document.createElement("div");
    divList.setAttribute('class', 'list');
    container.appendChild(divList);
    return divList;
}

function criaUlList(divList){
    const ulList = document.createElement('ul');
    ulList.setAttribute('class', 'to-do-list');
    divList.appendChild(ulList);
    return ulList;
}*/

function criarTarefa(textoInput){
    const li = criali();
    li.innerText = textoInput;
    toDoList.appendChild(li);
    criaButtonClear(li);
    limpaInput();
    salvarTarefas();
}

toDoSend.addEventListener('click', function(e){
    if(toDoField.value != ""){
        //const divList = criaDivList(container);
        //const ulList = criaUlList(divList);
        //const li = criali();
        //const buttonClear = criaButtonClear();
        criarTarefa(toDoField.value);
    } else {
        alert("Favor inserir o nome da tarefa!");
    }
});

toDoField.addEventListener('keyup', function(e){
    if(toDoField.value == "" && e.keyCode === 13){
        alert("Favor inserir o nome da tarefa!")

    } if(e.keyCode === 13 && toDoField.value != ""){
        //const divList = criaDivList(container);
        //const ulList = criaUlList(divList);
        //const li = criali();
        //const buttonClear = criaButtonClear();
        criarTarefa(toDoField.value);
    } ;
    })

addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('button-clear')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = container.querySelectorAll('li');
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa)
    }
}
adicionarTarefasSalvas()