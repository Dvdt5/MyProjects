const userToDoNote = document.getElementById("toDo");
const userToDoTime = document.getElementById("time");
const submitButton = document.getElementById("submit");
const notesList = document.getElementById("showList");



function addNote() {
    
    let HTMLString = `<p class="toDoRow">${userToDoNote.value}</p><span class="right"><button class="mark button">Mark as done</button><button class="delete button">Delete</button></span>
    <hr>`;
    notesList.insertAdjacentHTML("beforeend",HTMLString);
    
}
submitButton.addEventListener("click",addNote);