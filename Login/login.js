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
  

var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");

var model ={};

window.login = function(e){
  e.preventDefault();
  model.email = userEmail.value;
  model.password = userPassword.value
  console.log(model);

  auth.signInWithEmailAndPassword (model.email,model.password)
  .then(function(res){
      console.log(res.user.uid, "successfull Login");
      window.location.assign("../Todo App/todo.html");
      model.id = res.user.uid;
      let refrence = ref(database ,`user/ ${model.id}`);
      onValue(refrence,function(user){
          console.log(user.val());
      })
      
  userEmail.value = ""
  userPassword.value = ""
  })
  .catch(function(err){
      console.log(err.message)
    })
}