let input = document.getElementById("taskInput");

let button = document.getElementById("addBtn");


let list = document.getElementById("taskList");


function addTask(){
    let task = input.value.trim();


    if(task === ""){
        alert("please enter task");
        return;
    }

    let li=document.createElement("li");

    let span = document.createElement("span");

    span.textContent= task;

    li.appendChild(span);

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click",function(){
        li.remove();
    });

    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";

}

button.addEventListener("click", addTask);

input.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        addTask();
    }
});