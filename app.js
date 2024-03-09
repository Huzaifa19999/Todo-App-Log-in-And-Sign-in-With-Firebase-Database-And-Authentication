// //  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
//  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
//  import { getDatabase, push ,ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

//  // Import the functions you need from the SDKs you need
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  const firebaseConfig = {
//    apiKey: "AIzaSyDpr09kSvoFn-b8hCGeubVvITky1S7wMCE",
//    authDomain: "fir-authentication-a9984.firebaseapp.com",
//    projectId: "fir-authentication-a9984",
//    storageBucket: "fir-authentication-a9984.appspot.com",
//    messagingSenderId: "986368924981",
//    appId: "1:986368924981:web:256e83ab91ca35620fc07c"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const database = getDatabase();
//  const auth = getAuth();


var todoList = document.getElementById('todoList');
var inputTodo = document.getElementById("inputTodo");
var addTodoBtn = document.getElementById("addTodo");
var updateTodoBtn = document.getElementById("updateTodo");
var deleteAllBtn = document.getElementById('deleteAllBtn');

var currentEditTodo = null;

function addTodo() {
    var todoText = inputTodo.value.trim();
    
    if (todoText === "") {
        alert("Please enter a todo");
        return;
    }

    var todoItem = document.createElement('div');
    todoItem.setAttribute('class', 'todoItem');
    todoList.appendChild(todoItem);

    var textElement = document.createElement('p');
    textElement.innerHTML = todoText;
    todoItem.appendChild(textElement);

    var deleteButton = createButton("Delete", 'deleteBtn', deleteTodo);
    var editButton = createButton("Edit", 'editBtn', editTodo);

    todoItem.appendChild(deleteButton);
    todoItem.appendChild(editButton);

    inputTodo.value = "";
}

function updateTodo() {
    if (currentEditTodo) {
        var updatedText = inputTodo.value.trim();

        if (updatedText === "") {
            alert("Please enter a todo");
            return;
        }

        currentEditTodo.querySelector('p').innerHTML = updatedText;
        currentEditTodo = null;
        inputTodo.value = "";
    } else {
        alert("No todo selected for update");
    }
}

function deleteTodo() {
    var todoItem = this.parentElement;
    todoList.removeChild(todoItem);
}

function editTodo() {
    var todoItem = this.parentElement;
    var todoText = todoItem.querySelector('p').innerHTML;

    inputTodo.value = todoText;
    currentEditTodo = todoItem;
}

function createButton(text, className, clickHandler) {
    var button = document.createElement("button");
    button.setAttribute('class', className);
    button.innerHTML = text;
    button.addEventListener('click', clickHandler);
    return button;
}


deleteAllBtn.addEventListener('click', deleteAllTodos);

function deleteAllTodos() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    inputTodo.value = "";
    currentEditTodo = null;
}


function logOut() {
    window.location.href = "../login.html";

}  