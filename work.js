document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const taskText = taskInput.value.trim();

            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = "";
            }
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-actions">
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </div>
            <input type="text" class="edit-input" value="${taskText}" style="display: none;">
        `;

        const editButton = li.querySelector(".edit-button");
        const deleteButton = li.querySelector(".delete-button");
        const taskTextElement = li.querySelector(".task-text");
        const editInput = li.querySelector(".edit-input");

        editButton.addEventListener("click", function () {
            taskTextElement.style.display = "none";
            editInput.style.display = "block";
            editInput.focus();
        });

        editInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                const newText = editInput.value.trim();
                if (newText !== "") {
                    taskTextElement.textContent = newText;
                }
                taskTextElement.style.display = "block";
                editInput.style.display = "none";
            }
        });

        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        taskList.appendChild(li);
    }
});
