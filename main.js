const nav = document.querySelector("nav");
let timeout = 4e3,
	loading = document.querySelector(".loading");
onscroll = () => {
	scrollY >= 50 ? nav.classList.add("active") : nav.classList.remove("active")
};
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
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

function allForm(e, t, a, z) {
	let n;
	a && ((n = document.createElement("p")).innerText = "العودة↩️", n.setAttribute("onclick", "location.reload()"), n.classList.add("return"));
	let o;
	database.ref("allMonuments/").on("value", function (e) {
		o = e.val()
	}), t && (loading.classList.add("active"), loading.children[loading.children.length - 1].innerText = "جاري التحميل..."), setTimeout(() => {
		let r = document.createElement("div");
		if (z) {
			for (let l in o)
				if (Object.hasOwnProperty.call(o, l)) {
					let i = o[l],
						d = document.createElement("article"),
						s = document.createElement("h2"),
						c = document.createElement("div"),
						m = document.createElement("p");
					s.innerText = i.title, m.innerText = i.p, c.classList.add("overlayer"), d.style.backgroundImage = `url(${i.image})`, d.append(c, s, m), r.append(d)
				}
			r.classList.add("data")
		} else {
			/*


				<div style="background-image: url(https://i.ibb.co/dfqGHF3/140-cu0431.jpg);">
				</div>
				<h2>دهشور</h2>
				<p><svg xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512">
						<path
							d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
					</svg> الجيزة </p>
				<p>دهشورتقع دهشور في جنوب منف ، كانت عاصمة مصر القديمة ، أقيمت أهرامات ملوك الدولة القديمة والوسطى عليه.
					اختار الملك سنفرو هضبة دهشور ليؤسس أول هرم له، لكنه لم ينجح في استكماله، حيث أصبح أول هرم له شبه
					منكسر.
				</p>*/
			for (let l in o)
				if (Object.hasOwnProperty.call(o, l)) {
					let i = o[l],
						d = document.createElement("article"),
						s = document.createElement("h2"),
						img = document.createElement("div"),
						lo = document.createElement("p");
						m = document.createElement("p");
					d.setAttribute('data--t', i.text);
					s.innerText = i.title;
					lo.innerText = i.pos;
					m.innerText = i.p;
					img.style.backgroundImage = `url(${i.image})`
					lo.innerHTML += ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>`
					d.append(img,s, lo,m);
					r.append(d);
				}
		}
		a ? document.querySelector(`.container#${e}`).append(n, r) : document.querySelector(`.container#${e}`).append(r), t && loading.classList.remove("active")
	}, timeout)
}
onload = () => {
	setTimeout(() => {
		document.querySelector(".preloader").classList.add("loaded")
	}, timeout)
};