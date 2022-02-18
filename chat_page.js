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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}

