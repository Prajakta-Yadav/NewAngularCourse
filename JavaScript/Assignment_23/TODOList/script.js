
let tasks = JSON.parse(localStorage.getItem("tasks")) || []


    function saveTasks(){
        
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    function renderTasks(){

        const list = document.getElementById("taskList")
        list.innerHTML = ""
        tasks.forEach((task,index)=>{
        const li = document.createElement("li")
        li.innerHTML = `
            <span style="text-decoration:${task.completed ? "line-through":"none"}">
            ${task.text}
            </span>
            <button onclick="toggleTask(${index})">✔</button>
            <button onclick="deleteTask(${index})">Delete</button>
            `

            list.appendChild(li)
        })

        document.getElementById("taskCount").innerText = tasks.length

        saveTasks()

    }

    
    function addTask(){

        const input = document.getElementById("taskInput")
        const text = input.value.trim()
        if(text === "") return
            if(tasks.some(t=>t.text===text)){
            alert("Task already exists")
            return
        }

        tasks.push({
            text:text,
            completed:false
        })


        input.value=""
        renderTasks()
    }

    function deleteTask(index){

        if(confirm("Delete this task?")){
            tasks.splice(index,1)
            renderTasks()
        }
    }

    function toggleTask(index){
    
        tasks[index].completed=!tasks[index].completed
        renderTasks()
    }
    
renderTasks()