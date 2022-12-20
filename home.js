const resize = () => {
    Array(...document.querySelectorAll(".slidee")).map(e => e.style.width = getComputedStyle(document.querySelector("header")).width)
}; 
function getDataForHomePage() {
     database.ref("home/").on("value",function (e) {
         let t = e.val();
          for (let a in t)
           if (Object.hasOwnProperty.call(t, a)) { let r = t[a];
             l = document.createElement("article"), n = document.createElement("div"), i = document.createElement("h2"), d = document.createElement("p"); n.classList.add("overlayer"), l.style.backgroundImage = `url(${r.image})`;
            i.innerText = r.title;
           d.innerText = r.p;
           l.append(n, i, d);
            document.querySelector(".galary").append(l) 
        } 
        })
        
        
        } 
           function getDataForHomePageLanding() {
    database.ref("landingText/").on("value", function (e) {
        let t = e.val(); t = t[parseInt(Math.random() * t.length)]; let a = document.createElement("div"), r = document.createElement("div"), l = document.createElement("h2"), n = document.createElement("p"); a.classList.add("slidee"), r.classList.add("overlayer"), document.querySelector("div.container:has(header.sliderr)").style.backgroundImage = `url(${t.image})`, l.innerText = t.title, n.innerText = t.subTitle, document.querySelector("div.container:has(header.sliderr)").append(r), a.append(l, n), document.querySelector("header.sliderr").append(a)
    })
}
window.onresize = resize;
getDataForHomePage();
getDataForHomePageLanding();
