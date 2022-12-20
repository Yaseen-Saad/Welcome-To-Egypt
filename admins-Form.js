let form = document.querySelector("form#login"),
    name = document.getElementById("naem");

function login(e) {
    e.preventDefault();
    let t = document.getElementById("mail").value.trim(""),
        r = document.getElementById("passs").value.trim("");
    name = name.value;
    "admin" == name && "yaseen.saad.frontend@gmail.com" == t && "admin" == r ? (sessionStorage.setItem("loggedIn", !0), sessionStorage.setItem("name", name), form.remove(), document.querySelector("p#paragraph").innerText = `مرحبا بك يا ${name} 😊`, document.querySelector(".logged").classList.add("active"), document.getElementById("error").remove()) : document.getElementById("error").innerText = "انت لست مشرف⛔  "
}
function calcLength(event, l) {
    let limit = document.getElementById('limit')
    limit.style.color = "#fff"
    limit.innerText = "متبقي " + (250 - l.length) + " حرف"
    if (l.length > 249) {
        limit.style.color = "#ED4F32"

        document.querySelector('#pinput').value = l.split("").splice(0, l.length - 1).join("")
        limit.innerText = "⚠️ لقد قمت بتخطي الحد"
    }
}
function addForm() {

    document.querySelector(".logged").remove();
    let e = document.createElement("form"),
        egypt = [
            "القاهرة",
            "الجيزة",
            "الأسكندرية",
            "الدقهلية",
            "الشرقية",
            "المنوفية",
            "القليوبية",
            "البحيرة",
            "الغربية",
            "بور سعيد",
            "دمياط",
            "الإسماعلية",
            "السويس",
            "كفر الشيخ",
            "الفيوم",
            "بني سويف",
            "مطروح",
            "شمال سيناء",
            "جنوب سيناء",
            "المنيا",
            "أسيوط",
            "سوهاج",
            "قنا",
            "البحر الأحمر",
            "الأقصر",
            "أسوان",
            "الواحات",
            "الوادي الجديد"
        ],
        t = document.createElement("input"),
        r = document.createElement("input"),
        l = document.createElement("input"),
        a = document.createElement("input"),
        b = document.createElement("textarea"),
        p = document.createElement("select"),
        pl = document.createElement("label"),
        n = document.createElement("input"),
        i = document.createElement("div"),
        limit = document.createElement("p"),
        o = document.createElement("label"),
        u = document.createElement("label"),
        bL = document.createElement("label"),
        m = document.createElement("label"),
        c = document.createElement("label"),
        d = document.createElement("p"),
        s = document.createElement("p");
    d.style.height = "fit-content";
    d.classList.add("addError");
    o.innerText = "ادخل اسم الاثر";
    m.innerText = "ادخل نبذة عن الاثر";
    c.innerText = "ادخل صورة الاثر";
    s.innerText = "العودة↩️";
    u.innerText = "اضافة الى المنزل";
    pl.innerText = "حدد مكان الاثر"
    bL.innerText = "ادخل كل المعلمومات عن الاثر";
    t.placeholder = "ادخل اسم الاثر";
    r.placeholder = "ادخل نبذة عن الاثر";
    l.placeholder = "ادخل صورة الاثر";
    o.setAttribute("for", "titleinput");
    m.setAttribute("for", "pinput");
    c.setAttribute("for", "imageinput");
    bL.setAttribute("for", "textLapel");
    a.setAttribute("onclick", "addMonument(event,document.querySelectorAll('input,textarea,select'))");
    r.setAttribute("onkeydown", "calcLength(event,this.value)");
    r.setAttribute("maxlength", "250");
    u.setAttribute("for", "checkbox");
    pl.setAttribute("for", "position");
    s.setAttribute("onclick", "location.reload()");
    a.setAttribute("value", "اضف اثر");
    s.classList.add("return");
    t.type = "text";
    r.type = "text";
    l.type = "text";
    a.type = "submit";
    n.type = "checkbox";
    i.append(n, u);
    t.id = "titleinput";
    limit.id = "limit";
    p.id = "position"
    b.id = 'textLapel'
    r.id = "pinput";
    l.id = "imageinput";
    n.id = "checkbox";
    // p pl
    for (const gov of egypt) {
        let option = document.createElement('option')
        option.innerText = gov;
        p.append(option)
    }
    e.append(o, t, m, r, limit, bL, b, pl, p, c, l, i, d, a);
    document.querySelector("main").append(s, e)
}

function addMonument(e, t) {
    e.preventDefault()
    if (t[0].value.trim() && t[1].value.trim() && t[5].value.trim() && t[2].value.trim()) {
        document.querySelector(".addError").innerText = "";
        let r;
        database.ref("allMonuments/").on("value", function (e) {
            r = e.val()
        });

        loading.classList.add("active");
        setTimeout(() => {
            if (r) {
                for (let e in r)
                    if (Object.hasOwnProperty.call(r, e)) {
                        let l = r[e];
                        if (l.title == t[0].value) {
                            document.querySelector(".addError").innerText = "الاثر موجود بالفعل ⚠️", loading.classList.remove("active");
                            return
                        }
                        document.querySelector(".addError").innerText = ""
                    } database.ref("allMonuments/" + Object.keys(r).length + "/").set({
                        title: t[0].value,
                        p: t[1].value,
                        text: t[2].value,
                        pos: t[3].value,
                        image: t[4].value
                    })
                if (t[5].checked) {
                    database.ref("home/").on("value", function (e) {
                        r = e.val()
                    });
                    setTimeout(() => {
                        database.ref("home/" + Object.keys(r).length + "/").set({
                            title: t[0].value,
                            p: t[1].value,
                            text: t[2].value,
                            pos: t[3].value,
                            image: t[4].value
                        }), loading.classList.remove("active");
                        alert("تم الاضافة");
                        t[0].value = "";
                        t[1].value = "";
                        t[2].value = "";
                        t[4].value = "";
                    }, timeout)
                }
                else {
                    alert("تم الاضافة");
                    loading.classList.remove("active");
                    t[0].value = "";
                    t[1].value = "";
                    t[2].value = "";
                    t[4].value = "";
                }
            }
            else {
                loading.classList.remove("active");
                alert("الانترنت ضعيف برجاء المحاولة لاحقا");
            }
        }, timeout + 2000)
    } else document.querySelector(".addError").innerText = "برجاء ادخال معلومات حقيقية ⚠️"
}

function allFormAdmin(e) {
    document.querySelector(".logged").remove();
    allForm("gg", !0, !0, !0, "allMonuments");
}
sessionStorage.loggedIn && (form.remove(), document.querySelector("p#paragraph").innerText = `مرحبا بك يا  ${sessionStorage.name}😊`, document.getElementById("error").remove(), document.querySelector(".logged").classList.add("active")), onload = () => document.querySelector(".preloader").classList.add("loaded");






function delet() {
    document.querySelector("#methods").innerHTML = `
        <li onclick="goToHome()">مسح اثر من المنزل</li>
        <li onclick="goToAll()">مسح اثر من كل الآثار</li>
        <p class="return" id="returnDelete" onclick="location.reload()">العودة↩️</p>
        `
}
function goToHome() {
    let back;

    database.ref(`home/`).on("value", function (e) {
        if (!back) {
            back = e.val()
        }
    })

    document.querySelector(".logged").remove();
    allForm('homeAllDelete', true, true, false, "home", true)

    setTimeout(() => {
        document.getElementById('homeAllDelete').innerHTML += "<p id='undo'>العودة الي اخر تعديل</p>"
        articleClick('home')
        console.log(back);
        undo.onclick = () => {
            console.log('clicked');
            document.getElementById('homeAllDelete').innerHTML += "<p id='undo'>العودة الي اخر تعديل</p>"
            for (let i = 0; i < Object.keys(back).length; i++) {
                let addd = back[i]
                database.ref(`home/${i}/`).set({
                    addd
                })
            } let final = document.createElement('div');
            for (let l in back)
                if (Object.hasOwnProperty.call(back, l)) {
                    let i = back[l],
                        d = document.createElement("article"),
                        s = document.createElement("h2"),
                        img = document.createElement("div"),
                        lo = document.createElement("p");
                    m = document.createElement("p");
                    d.setAttribute('data--t', i.text);
                    d.setAttribute('data--id', l);
                    m.classList.add('gg')
                    s.innerText = i.title;
                    lo.innerText = i.pos;
                    m.innerText = i.p;
                    img.style.backgroundImage = `url(${i.image})`
                    lo.innerHTML += ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>`
                    d.append(img, s, lo, m);
                    final.append(d);
                }
            document.getElementById('homeAllDelete').innerHTML = ""
            document.getElementById('homeAllDelete').append(final)
            document.getElementById('homeAllDelete').innerHTML += "<p id='undo'>العودة الي اخر تعديل</p>"
            articleClick('home')
            n = document.createElement("p");
            n.innerText = "العودة↩️";
            n.setAttribute("onclick", "location.reload()");
            n.classList.add("return")
            document.getElementById('homeAllDelete').prepend(n)

        }
    }, timeout);
}


function goToAll() {
    let back;

    database.ref(`allMonuments/`).on("value", function (e) {
        if (!back) {
            back = e.val()
        }
    })
    document.querySelector(".logged").remove();
    allForm('homeAllDelete', true, true, false, "allMonuments", true)

    setTimeout(() => {
        document.getElementById('homeAllDelete').innerHTML += "<p id='undo'>العودة الي اخر تعديل</p>"
        articleClick('allMonuments')
        console.log(back);
        undo.onclick = () => {
            console.log('clicked');
            document.getElementById('homeAllDelete').innerHTML += "<p id='undo'>العودة الي اخر تعديل</p>"
            for (let i = 0; i < Object.keys(back).length; i++) {
                let addd = back[i]
                database.ref(`allMonuments/${i}/`).set({
                    addd
                })
            } let final = document.createElement('div');
            for (let l in back)
                if (Object.hasOwnProperty.call(back, l)) {
                    let i = back[l],
                        d = document.createElement("article"),
                        s = document.createElement("h2"),
                        img = document.createElement("div"),
                        lo = document.createElement("p");
                    m = document.createElement("p");
                    d.setAttribute('data--t', i.text);
                    d.setAttribute('data--id', l);
                    m.classList.add('gg')
                    s.innerText = i.title;
                    lo.innerText = i.pos;
                    m.innerText = i.p;
                    img.style.backgroundImage = `url(${i.image})`
                    lo.innerHTML += ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>`
                    d.append(img, s, lo, m);
                    final.append(d);
                }
            document.getElementById('homeAllDelete').innerHTML = ""
            document.getElementById('homeAllDelete').append(final)
            document.getElementById('homeAllDelete').innerHTML += "<p id='undo'>العودة الي اخر تعديل</p>"
            articleClick('allMonuments')
            n = document.createElement("p");
            n.innerText = "العودة↩️";
            n.setAttribute("onclick", "location.reload()");
            n.classList.add("return")
            document.getElementById('homeAllDelete').prepend(n)

        }
    }, timeout);
}
function articleClick(pos) {
    Array(...document.querySelectorAll('article:has(div)'))
        .map(ele => {
            ele.onclick = () => {
                alert('هذا الاثر سيحذف نهائيا')
                loading.classList.add('active')
                database.ref(`${pos}/` + ele.getAttribute('data--id')).remove()
                setTimeout(() => {
                    ele.remove()
                    loading.classList.remove('active')
                }, timeout - 2000);

            }
        })
}




