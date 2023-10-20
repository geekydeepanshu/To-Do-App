const addTaskButton = document.querySelector(".addTaskButton");
const listItemContainer = document.querySelector(".listItemContainer");

addTaskButton.addEventListener("click", () => {
  
  if (taskInput === " " || taskInput === "") {
    alert("You must Write Something!");
  } else {
        let arr=$_addTaskInList();
        $_taskCompletetion(arr[0]);
        $_deletetask(arr[1]);
  }
});


function $_addTaskInList(){
  const taskInputBox = document.querySelector("#taskInput");
  const taskInput = taskInputBox.value;  
    const listItem = document.createElement("li");
    listItem.className = "listItemUnchecked";
    const deleteTask = document.createElement("span");
    deleteTask.className = "crossIconContainer";
    listItem.innerText = taskInput;
    deleteTask.innerHTML = "\u00d7";
    listItem.appendChild(deleteTask);
    listItemContainer.appendChild(listItem);
    taskInputBox.value = "";
    //csaveData();
    return [listItem,deleteTask];
}

function $_taskCompletetion(listItem){
  const taskList = document.querySelectorAll(".listItemUnchecked");
    taskList.forEach((node) => {
      node.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        listItem.className = "listItemChecked";
        //saveData();
      });
    });
}
function $_deletetask(deleteTask){
  deleteTask.addEventListener("click",(event)=>{
    event.stopImmediatePropagation();
    event.target.parentElement.remove();
    //saveData();
})
}

function saveData(){
  localStorage.setItem("data",listItemContainer.innerHTML);
}

function showTasks(){
  listItemContainer.innerHTML=localStorage.getItem("data");
}
