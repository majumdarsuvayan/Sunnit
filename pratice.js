const firebaseConfig = {
    apiKey: "AIzaSyDAOyaBdhsaDp1tqZoxfIgFM8p-yD7Wd_g",
    authDomain: "sunnit-36c65.firebaseapp.com",
    databaseURL: "https://sunnit-36c65-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sunnit-36c65",
    storageBucket: "sunnit-36c65.appspot.com",
    messagingSenderId: "186430285782",
    appId: "1:186430285782:web:9726faa3ac00f66046e677"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser()
{
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}
