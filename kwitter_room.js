
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA4BgjkpeHTc1MjKqECPdpQemQy2_6ki7Y",
      authDomain: "kwitter-e326a.firebaseapp.com",
      databaseURL: "https://kwitter-e326a-default-rtdb.firebaseio.com",
      projectId: "kwitter-e326a",
      storageBucket: "kwitter-e326a.appspot.com",
      messagingSenderId: "436780234154",
      appId: "1:436780234154:web:414387d7fc97dbb504a7d3"
    };

    //initialise firebase
    ffirebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";


    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"     
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_msg.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_msg.html";
}   

function logout() 
{localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location ="kwitter.html";} 



