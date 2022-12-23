let loader = document.querySelector('.preloader')
let l = document.querySelector('.l');
for (const gov of govs) {

    let li = document.createElement('li'),

    a = document.createElement('a')
    a.innerText = gov
    a.setAttribute('onclick', "show(event)")
    li.append(a)
    document.querySelector('ul#govs').append(li)
}

function show(e) {
    if (!e.target.classList.contains("active")) {
        document.querySelectorAll('ul>li>a').forEach(ele => ele.classList.remove('active'))
        e.target.classList.add('active')
        loader.classList.remove('loaded')
        let data,
        l = document.querySelector('.l')
        database.ref(`allMonuments/`).on("value", function (e) {
            data = e.val()
        })
        setTimeout(() => {
            l.innerHTML = ""
         //   console.log(data)
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    if (element.pos == e.target.innerText) {
                        d = document.createElement("article"),
                        s = document.createElement("h2"),
                        img = document.createElement("div"),
                        lo = document.createElement("p"),
                        m = document.createElement("p");
                        d.setAttribute('data--t', element.text);
                        d.setAttribute('data--id', key);
                        m.classList.add('gg')
                        s.innerText = element.title;
                        img.style.backgroundImage = `url(${element.image})`
                        lo.innerText = element.pos;
                        m.innerText = element.p;
                        lo.innerHTML += ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>`
                        d.append(img, s, lo, m);
                        l.append(d);
                    }
                    console.log(element)
                }
            }
            loader.classList.add('loaded')
        },
            timeout - 2000);
    }}
onload = () => {

    document.querySelector('ul#govs li:first-of-type a').click()
}
loader.classList.remove('loaded')
  