let btn=document.querySelector('button')
let inp=document.querySelector('input')
let ul=document.querySelector('ul')
let tasks;
if(!localStorage.getItem('todolist')){
    tasks=[]
}
else{
     tasks=localStorage.getItem('todolist').split(',');
     for(let task of tasks){
        let li=document.createElement('li')
        li.innerHTML=task,
        li.innerHTML+=`<span><i class="fa-solid fa-trash-can"></i></span>`
        ul.appendChild(li)
    }
    
}

function creatli(){
    let lii=document.createElement('li')
    lii.innerHTML=inp.value,
    lii.innerHTML+=`<span><i class="fa-solid fa-trash-can"></i></span>`
    ul.appendChild(lii)
    tasks.pop(inp.value)
    gettasks(tasks)
}
btn.addEventListener('click',function(event){
    creatli(); 
    inp.value=''
})
ul.addEventListener('click',function(event){
    if(event.target.nodeName=='I'){
        let target=event.target.parentElement.parentElement
        target.style.display='none'
        tasks.splice(tasks.indexOf(target.textContent),1)
        localStorage.setItem('todolist',tasks)
    }
    if(event.target.nodeName=="LI"){
        event.target.classList.toggle('show')
    }
})

function gettasks(text){
    localStorage.setItem('todolist', text)
}
