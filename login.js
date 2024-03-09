  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  import { getDatabase, push ,ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDpr09kSvoFn-b8hCGeubVvITky1S7wMCE",
    authDomain: "fir-authentication-a9984.firebaseapp.com",
    projectId: "fir-authentication-a9984",
    storageBucket: "fir-authentication-a9984.appspot.com",
    messagingSenderId: "986368924981",
    appId: "1:986368924981:web:256e83ab91ca35620fc07c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase();
  const auth = getAuth();

var model = {}
var email = document.getElementById("email")
var password = document.getElementById("password")


window.logIn = function(e) {
    e.preventDefault();
    model.email = email.value;
    model.password = password.value;
    console.log(model);

    signInWithEmailAndPassword(auth, model.email, model.password)
        .then(function(res) {
            console.log(res.user.uid, "Success Response");
            model.id = res.user.uid;
            var reference = ref(database, `user/${model.id}`);
            onValue(reference, function(user) {
                console.log(user.val());
            });
                // email.value = "";
                // password.value = "";
                window.location.href = "TodoApp/index.html";

            })
        .catch(function(err) {
            console.log(err, "Error Response");
            alert(err.message);
        });
};
