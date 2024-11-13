// var firebaseConfig = {
//     apiKey: "AIzaSyCjlf9lnxncY9BdSYKCVFOLjYB7RRnZ0DM",
//     authDomain: "todo-with-data-base.firebaseapp.com",
//     projectId: "todo-with-data-base",
//     storageBucket: "todo-with-data-base.firebasestorage.app",
//     messagingSenderId: "772595149557",
//     appId: "1:772595149557:web:fa436e70c9b44a957673bc"
//   };
//   var app = firebase.initializeApp(firebaseConfig);
// var database = firebase.database();


var todolist = document.getElementById('todolist');

function add(){
    var input = document.getElementById('todoinput');

    if(input.value){
        var liElement = document.createElement("li");
        var liText = document.createTextNode(input.value);
        liElement.appendChild(liText);
        todolist.appendChild(liElement);

        var deletebutton = document.createElement('button');
        var buttonText = document.createTextNode("Delete")
        deletebutton.appendChild(buttonText);
        liElement.appendChild(deletebutton);
        deletebutton.setAttribute("onclick","deletesingleItem(this)");
        deletebutton.setAttribute("class","del")

        var editbutton = document.createElement('button');
        var editbtnText = document.createTextNode('Edit');
        editbutton.appendChild(editbtnText);
        liElement.appendChild(editbutton);
        editbutton.setAttribute("onclick",'editItem(this)');
        editbutton.setAttribute("class","edit")
        console.log(liElement);
        input.value="";
    } else{
        alert('Fill the Field')
    };
};

function deleteItem(){
    todolist.innerHTML = "";
};

function deletesingleItem(e){
    e.parentNode.remove();
};

function editItem(e){

    var updatedVal= prompt("Enter Updated Value...")
    e.parentNode.firstChild.nodeValue = updatedVal;
}