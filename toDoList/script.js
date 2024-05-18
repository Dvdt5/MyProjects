const userToDoNote = document.getElementById("toDo");
const userToDoTime = document.getElementById("time");
const submitButton = document.getElementById("submit");
const notesList = document.getElementById("showList");
const userWarn = document.getElementById("talkUser");

const isInvalidInput = () => {
    if (userToDoNote.value === '' || userToDoTime.value === '') {
        userWarn.innerText = "Please enter a task and a time.";
        return true;
    }
}

const delBtn = (e) => {
    document.getElementById(e).remove();
    if (document.getElementById(e) === notesList.firstElementChild) {
        notesList.style.display = "none";
    }
}
const markBtn = (e) => {
    document.getElementById(e).classList.toggle("marked");
}

submitButton.addEventListener("click",()=>{
    if (isInvalidInput()) {
        return;
    }
    notesList.style.display = "block";
    const taskId = (Math.random()*10);
    let HTMLString = `<div id="${taskId}"><p class="toDoRow">${userToDoNote.value}<br><span class="highlight">${userToDoTime.value}</span></p><span class="right"><button class="button" onclick="markBtn(${taskId})">Mark / Unmark</button><button class="button" onclick="delBtn(${taskId})">Delete</button></span>
    <hr></div>`;
    notesList.insertAdjacentHTML("beforeend",HTMLString);
    userToDoNote.value = "";
    userToDoTime.value = "";
});
