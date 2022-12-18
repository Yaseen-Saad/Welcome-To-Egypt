const nav = document.querySelector('nav');
onscroll = () => {
    if (scrollY >= 200) nav.classList.add('active')
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
