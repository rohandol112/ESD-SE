document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");

    //to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <div class="task-buttons">
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        //event listeners to new buttons
        li.querySelector(".edit-button").addEventListener("click", editTask);
        li.querySelector(".delete-button").addEventListener("click", deleteTask);
    };

    //to edit a task
    const editTask = (event) => {
        const li = event.target.closest("li");
        const taskText = li.firstChild.textContent.trim();
        const newTaskText = prompt("Edit your task:", taskText);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            li.firstChild.textContent = newTaskText.trim();
        }
    };

    //to delte task
    const deleteTask = (event) => {
        const li = event.target.closest("li");
        li.remove();
    };

    // Add task 
    addButton.addEventListener("click", addTask);

    // Add task when the Enter key is pressed in the input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Add event listeners 
    document.querySelectorAll(".edit-button").forEach(button => {
        button.addEventListener("click", editTask);
    });

    document.querySelectorAll(".delete-button").forEach(button => {
        button.addEventListener("click", deleteTask);
    });
});
