// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
userTaskList.push({id: 5, task: "walk the dog"});
const editTask = userTaskList.find(task => task.id === 4);
if (editTask) {
  editTask.task = "GO to the gym";
}

userTaskList.pop()

const lastTask = userTaskList[userTaskList.length -1];
console.log(`Task id: ${lastTask.id}, ${lastTask.task}`);