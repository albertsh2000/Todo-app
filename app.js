const inputBox = document.querySelector(".inputField input")
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".todoList")
const pendingNumber = document.querySelector(".pandingNumb")
const deleteAllBtn = document.querySelector(".footer button")

inputBox.addEventListener("keyup", () => {
   let userData = inputBox.value
   userData.trim() != 0
      ? addBtn.classList.add("active")
      : addBtn.classList.remove("active")
})

showTasks()

addBtn.addEventListener("click", () => {
   let userData = inputBox.value
   let getLocalStorage = localStorage.getItem("New Todo")
   getLocalStorage == null
      ? (listArr = [])
      : (listArr = JSON.parse(getLocalStorage))
   listArr.push(userData)
   localStorage.setItem("New Todo", JSON.stringify(listArr))
   showTasks()
})

function showTasks() {
   let getLocalStorage = localStorage.getItem("New Todo")
   getLocalStorage == null
      ? (listArr = [])
      : (listArr = JSON.parse(getLocalStorage))
   pendingNumber.textContent = listArr.length
   let newliTag = ""
   listArr.forEach((element, index) => {
      newliTag += `<li> ${element} <span onclick = "deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`
   })

   todoList.innerHTML = newliTag
   inputBox.value = ""
}

function deleteTask(index) {
   let getLocalStorage = localStorage.getItem("New Todo")
   listArr = JSON.parse(getLocalStorage)
   listArr.splice(index, 1)
   localStorage.setItem("New Todo", JSON.stringify(listArr))
   showTasks()
}

deleteAllBtn.addEventListener("click", () => {
   listArr = []
   localStorage.setItem("New Todo", JSON.stringify(listArr))
   showTasks()
})
