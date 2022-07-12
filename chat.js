const firebaseConfig = {
  apiKey: "AIzaSyCPamrnqE203LJj8tCL2ILo4OJ49DYm_Nc",
  authDomain: "kwitter-69030.firebaseapp.com",
  databaseURL: "https://kwitter-69030-default-rtdb.firebaseio.com",
  projectId: "kwitter-69030",
  storageBucket: "kwitter-69030.appspot.com",
  messagingSenderId: "842469319632",
  appId: "1:842469319632:web:29e01f974b47fb94884fd5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);

  window.location = "chat_room.html";

}