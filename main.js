const firebaseConfig = {
    apiKey: "AIzaSyBFAzmoAPFyC6F8KX7i3GVOQTyt3FUx020",
    authDomain: "test-8cee9.firebaseapp.com",
    databaseURL: "https://test-8cee9-default-rtdb.firebaseio.com",
    projectId: "test-8cee9",
    storageBucket: "test-8cee9.appspot.com",
    messagingSenderId: "948419772366",
    appId: "1:948419772366:web:daf1f00812e43dd054759f",
    measurementId: "G-863ZW9LD04"
};
firebase.initializeApp(firebaseConfig);

onload = () => {
    document.querySelector(".preloader").classList.add("loaded")
    const dbRef = firebase.darabase().ref()
    console.log(dbRef);

}
