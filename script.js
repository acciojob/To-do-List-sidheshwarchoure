//your code here
var	btn = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");
var todoValue = document.getElementById("newTodoInput");
function addTodo() {
	if(todoValue.value)
	{
      var li = document.createElement('li');
      li.textContent = todoValue.value;
      ol.appendChild(li);
      todoValue.value = "";
	}
}
btn.addEventListener('click',addTodo);
