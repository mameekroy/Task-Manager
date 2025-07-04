import { taskService } from "../service/service.js"

window.addEventListener('load', initEvents)

let cardDiv

function initEvents(){
    // alert('Init Event Called')
    let addButton = document.getElementById('add')
    addButton.addEventListener('click', addTask)
    cardDiv = document.getElementById('cards')
}

function addTask(){
    let ids = ['title', 'description', 'date', 'priority']
    let taskObject = {}
    for(let id of ids){
        taskObject[id] = document.getElementById(id).value
    }

    // console.log(taskObject)

    taskService.addTask(taskObject)

    // console.log(taskService.task)

    printTasks()
}

function printTasks(){
    cardDiv.innerHTML = ''
    taskService.task.map((eachTask) => printCard(eachTask))
}

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

function printCard(task){
    const card = document.createElement('div')
    card.classList = 'card'
    card.style.width = '18 rem'

    const title = document.createElement('h3')
    title.classList = 'card-title'
    title.innerText = task.title

    const description = document.createElement('p')
    description.classList = 'card-text'
    description.innerText = task.description

    const date = document.createElement('h4')
    date.classList = 'card-title'
    date.innerText = task.date

    card.append(title, description, date)

    cardDiv.appendChild(card)

}


