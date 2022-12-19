const nav = document.querySelector('nav');
let timeout = 2000;
onscroll = () => {
  if (scrollY >= 50) nav.classList.add('active')
  else nav.classList.remove('active')
}
const firebaseConfig = {
  apiKey: "AIzaSyA-NjEsZD3KeQXx1cCPF6P3VMQZS8Tq0EE",
  authDomain: "egyption-monuments.firebaseapp.com",
  databaseURL: "https://egyption-monuments-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "egyption-monuments",
  storageBucket: "egyption-monuments.appspot.com",
  messagingSenderId: "210061951069",
  appId: "1:210061951069:web:d582f186f8003ea1d50db4",
  measurementId: "G-G0TZ57X8FH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database letiable
let database = firebase.database()
function Stars(numberOfStars, divID) {
  let chosenDiv = document.getElementById(divID)
  let i;
  for (let i = 0; i < numberOfStars; i++) {
    let text = "";
    let strasBg;
    let rgb = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
    strasBg = 'rgb(' + rgb.join(',') + ')';
    let top = parseInt(Math.random() * 90) + 3;
    let right = parseInt(Math.random() * 90) + 3;
    text += "<div class='stars' style='top:" + top + "%;transform: rotate(" + parseInt(Math.random() * 360) + "deg);background-color:" + strasBg + "; right: " + right + "%;'></div>";
    chosenDiv.innerHTML += text;
  }
}
onload = () => {
  setTimeout(() => {
    document.querySelector(".preloader").classList.add("loaded")
  }, timeout);

}
