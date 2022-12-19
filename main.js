const nav = document.querySelector('nav');
let timeout = 2000,
  loading = document.querySelector(
    '.loading');
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

function allForm(renderId, ifloading, ifreturn) {
  let returnn;
  if (ifreturn) {
    returnn = document.createElement(
      'p')
    returnn.innerText = "العودة↩️";
    returnn.setAttribute('onclick', "location.reload()");
    returnn.classList.add('return')
  }
  let data;
  database.ref('allMonuments/')
    .on(
      'value',
      function (snapshot) {
        data = snapshot.val()
      })
  if (ifloading) {

    loading.classList.add('active');
    loading.children[loading.children.length - 1].innerText = "جاري التحميل..."
  }

  setTimeout(() => {
    let showDiv = document.createElement('div');
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        let article = document.createElement('article'),
          title = document.createElement('h2'),
          overlay = document.createElement('div'),
          subTitle = document.createElement('p');
        title.innerText = element.title
        subTitle.innerText = element.p
        overlay.classList.add('overlayer')
        article.style.backgroundImage = `url(${element.image})`
        article.append(overlay, title, subTitle)
        showDiv.append(article)
      }
    }
    showDiv.classList.add('data')
    if (ifreturn)
      document.querySelector(`.container#${renderId}`).append(returnn, showDiv)
    else
      document.querySelector(`.container#${renderId}`).append(showDiv)
    if (ifloading) {
      loading.classList.remove('active');
    }
  }, timeout);


}
