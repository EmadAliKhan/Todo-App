var inp = document.getElementById("inp");
var todoList = document.getElementById("todoList")
var todoData = [];
function todoAdd(){
    if(inp.value == ""){
        alert("please enter something");
    }else{
    todoData.push(inp.value);
    inp.value = "";
    render();
}
    saveData();
}
function render(){
    todoList.innerHTML = "";
    for(var i=0; i<todoData.length; i++){
        todoList.innerHTML += `<li>  ${todoData[i]}  <button class="btnEdit" onclick="editTodo(${i})"> Edit  </button>    <button    class="btnDel" onclick="deleteTodo(${i})"> Delete </button>   </li>`
    }
}
function editTodo(indexNumber){
  todoData[indexNumber] = prompt("please enter something in replacement.");
  if(todoData[indexNumber]==""){
    alert("please enter something");
  }else{
    render();
}
    saveData();
}
function deleteTodo(indexNumber){
    todoData.splice(indexNumber,1);
    render();
    saveData();
}
function deleteAllTodo(){
    todoData = [];
    todoList.innerHTML = "";
}
function saveData(){
    localStorage.setItem("data",todoList.innerHTML);
}
function showTask(){
    todoList.innerHTML = localStorage.getItem("data")
}
showTask();