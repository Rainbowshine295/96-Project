//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDXA317UQkqaLJgtJbcu0v2b3udkDhehfA",
      authDomain: "kwitter-5ed21.firebaseapp.com",
      databaseURL: "https://kwitter-5ed21-default-rtdb.firebaseio.com",
      projectId: "kwitter-5ed21",
      storageBucket: "kwitter-5ed21.appspot.com",
      messagingSenderId: "728087532670",
      appId: "1:728087532670:web:19a50f2d8bc3b48d0db42f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}