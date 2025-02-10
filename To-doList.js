// Basic to-do list using arrays
const todoList = []

function addTask(task) {
  todoList.push(task)
  console.log(`Task "${task}" added.`)
}

function showTasks() {
  console.log('Your to-do list:')
  todoList.forEach((task, index) => console.log(`${index + 1}. ${task}`))
}

addTask('Dhudh leke aao')
addTask('Chai Bnao')
showTasks()
