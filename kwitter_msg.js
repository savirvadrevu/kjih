//YOUR FIREBASE LINKS
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
 firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function send()
{
    msg=document.getElementById("msg").value
    firebase.database().ref (room_name).push({
    name:user_name,
    message:msg,
    like:0


});
document.getElementById("msg").value= "";


}

function logout() 
{localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location ="kwitter.html";} 
