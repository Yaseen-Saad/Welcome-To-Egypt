Stars(400, "bgr");
const resize = () => {
    Array(...document.querySelectorAll('.slidee')).map(ele => ele.style.width = getComputedStyle(document.querySelector('header')).width)
}
window.onresize = resize;
function getDataForHomePage() {
    database.ref('home/').on('value', function (snapshot) {
        let data = snapshot.val()
        for (const element in data) {
            if (Object.hasOwnProperty.call(data, element)) {
                const one = data[element];
                let article = document.createElement("article")
                let overlay = document.createElement("div")
                let title = document.createElement("h2")
                let p = document.createElement("p")
                overlay.classList.add('overlayer')
                article.style.backgroundImage = `url(${one.image})`
                title.innerText = one.title
                p.innerText = one.p
                article.append(overlay, title, p)
                document.querySelector('.galary').append(article)
            }
        }
    }
    )
}
getDataForHomePage();
function getDataForHomePageLanding() {
    database.ref('landingText/').on('value', function (snapshot) {
        let data = snapshot.val()
        data = data[parseInt(Math.random() * data.length
        )]
        let slide = document.createElement("div")
            , overlay = document.createElement("div")
            , title = document.createElement("h2")
            , p = document.createElement("p")
        slide.classList.add('slidee')
        overlay.classList.add('overlayer')
        document.querySelector('div.container:has(header.sliderr)').style.backgroundImage = `url(${data.image})`
        title.innerText = data.title
        p.innerText = data.subTitle
        document.querySelector('div.container:has(header.sliderr)').append(overlay)
        slide.append(title, p)
        document.querySelector('header.sliderr').append(slide)

    }

    )
}
getDataForHomePageLanding()
