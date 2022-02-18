// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBscsjvXtFVFFlhcNcZbbL9CoMDn9Ylf00",
  authDomain: "let-s-chat-app-65e43.firebaseapp.com",
  databaseURL: "https://let-s-chat-app-65e43-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-app-65e43",
  storageBucket: "let-s-chat-app-65e43.appspot.com",
  messagingSenderId: "842475148275",
  appId: "1:842475148275:web:ba78fa061de35511247886"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+" "+user_name+"!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("Room_name-"+Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirecttoRoomName(this.id)'>"+Room_names+"</div></hr>";
document.getElementById("output").innerHTML +=row;
  //End code
  });});}
getData();

function add_room(){
  room_name= document.getElementById("room_name").value;
  localStorage.setItem("room_name",room_name);
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  
  window.location= "chat_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}