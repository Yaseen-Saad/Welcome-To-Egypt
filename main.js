const firebaseConfig = {
    apiKey: "AIzaSyABZhi1dRA3s1VnaJACrpTy2XJZPRIb23Q",
    authDomain: "esp32-b7b1a.firebaseapp.com",
    databaseURL: "https://esp32-b7b1a-default-rtdb.firebaseio.com",
    projectId: "esp32-b7b1a",
    storageBucket: "esp32-b7b1a.appspot.com",
    messagingSenderId: "629790213722",
    appId: "1:629790213722:web:7eec5c2481fad8f384ba63"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Set database variable
var database = firebase.database()
function save(e) {
    e.preventDefault()
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    database.ref('users/' + username).set({
        username: username,
        password: password,
    })

    alert('Saved')
}
