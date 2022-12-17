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
// Set database letiable
let database = firebase.database()
let data = [];
function get() {
    let username = document.getElementById('username').value

    let user_ref = database.ref('users/' + username)
    user_ref.on('value', function (snapshot) {
        data = snapshot.val()
    })

}
get()
function save(e) {
    e.preventDefault()
    let id = data.length;

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    database.ref('users/' + id).set({
        username: username,
        password: password,
    })

    alert('Saved')
}
