var firebaseConfig = {
  apiKey: "AIzaSyCjlf9lnxncY9BdSYKCVFOLjYB7RRnZ0DM",
  authDomain: "todo-with-data-base.firebaseapp.com",
  projectId: "todo-with-data-base",
  storageBucket: "todo-with-data-base.firebasestorage.app",
  messagingSenderId: "772595149557",
  appId: "1:772595149557:web:fa436e70c9b44a957673bc"
};
  
  var app = firebase.initializeApp(firebaseConfig);
  
  var auth = firebase.auth();
  

  function signup(e) {
    e.preventDefault();
    console.log('hello');
    
    var name = document.getElementById("userName");
    var email = document.getElementById("userEmail");
    var password = document.getElementById("userPassword");
  
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }