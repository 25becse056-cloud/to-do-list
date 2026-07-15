const validUsername = "user"; // Example username
const validPassword = "password"; // Example password

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        document.querySelector(".login-container").style.display = "none";
        document.getElementById("todo-container").style.display = "block";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dueDateInput = document.getElementById("due-date");

function addTask() 
{
    if (inputBox.value.trim() === '' || dueDateInput.value.trim() === '') 
        {
        alert("You must write something and select a due date!");
    } 
    else 
    {
        let li = document.createElement("li");
        li.innerHTML = `${inputBox.value} - Due: ${dueDateInput.value}`;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
}

