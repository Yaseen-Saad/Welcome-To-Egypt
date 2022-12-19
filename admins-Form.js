let form = document.querySelector(
    'form#login'),
    name = document.getElementById(
        'naem');
if (sessionStorage.loggedIn) {
    form.remove()
    document.querySelector('p#paragraph')
        .innerText =
        `مرحبا بك يا  ${sessionStorage.name}😊`
    document.getElementById('error')
        .remove()
    document.querySelector('.logged')
        .classList.add('active')
}

function login(event) {
    event.preventDefault()
    let
        mail = document.getElementById(
            "mail")
            .value.trim(""),
        pass = document.getElementById(
            "passs")
            .value.trim("")
    name = name.value
    if (name == "admin" && mail ===
        "yaseen.saad.frontend@gmail.com" &&
        pass == "admin") {
        sessionStorage.setItem("loggedIn", true)
        sessionStorage.setItem("name", name)
        form.remove()
        document.querySelector(
            'p#paragraph')
            .innerText =
            `مرحبا بك يا ${name} 😊`
        document.querySelector('.logged')
            .classList.add('active')
        document.getElementById('error')
            .remove()
    }
    else {
        document.getElementById('error')
            .innerText = "انت لست مشرف⛔  ";
    }
}

onload = () => document.querySelector(
    ".preloader")
    .classList.add(
        "loaded")

function addForm() {
    document.querySelector('.logged')
        .remove()
    let form = document.createElement(
        'form'),
        title = document.createElement(
            'input'),
        p = document.createElement(
            'input'),
        image = document.createElement(
            'input'),
        submit = document.createElement(
            'input'),
        checkbox = document.createElement(
            'input'),
        checkboxDiv = document
            .createElement('div'),
        titleLabel = document
            .createElement('label'),
        checkboxLabel = document
            .createElement('label'),
        pLabel = document.createElement(
            'label'),
        imageLabel = document
            .createElement('label'),
        error = document.createElement(
            'p'),
        returnn = document.createElement(
            'p')
    error.style.height = "fit-content";
    error.classList.add('addError');
    titleLabel.innerText =
        "ادخل اسم الاثر";
    pLabel.innerText =
        "ادخل نبذة عن الاثر";
    imageLabel.innerText =
        "ادخل صورة الاثر";
    returnn.innerText = "العودة↩️"
    checkboxLabel.innerText =
        "اضافة الى المنزل"
    title.placeholder = "ادخل اسم الاثر";
    p.placeholder = "ادخل نبذة عن الاثر";
    image.placeholder =
        "ادخل صورة الاثر";
    titleLabel.setAttribute('for', "titleinput");
    pLabel.setAttribute('for', "pinput");
    imageLabel.setAttribute('for', "imageinput");
    submit.setAttribute('onclick', "addMonument(event,document.querySelectorAll('input'))");
    checkboxLabel.setAttribute('for', "checkbox");
    returnn.setAttribute('onclick', "location.reload()");
    submit.setAttribute('value', "اضف اثر");
    returnn.classList.add('return')
    title.type = "text";
    p.type = "text";
    image.type = "text";
    submit.type = "submit";
    checkbox.type = "checkbox";
    checkboxDiv.append(checkbox, checkboxLabel)
    title.id = "titleinput";
    p.id = "pinput";
    image.id = "imageinput";
    checkbox.id = "checkbox";
    form.append(titleLabel, title, pLabel, p, imageLabel, image, checkboxDiv, error, submit)
    document.querySelector('main')
        .append(returnn, form)
}

function addMonument(event, inputData) {
    event.preventDefault();
    if (inputData[0].value.trim() &&
        inputData[1].value.trim() &&
        inputData[2].value.trim()) {
        document.querySelector(
            '.addError')
            .innerText = ""
        let data;
        database.ref('allMonuments/')
            .on(
                'value',
                function (snapshot) {
                    data = snapshot.val()
                })
        loading.classList.add("active")
        setTimeout(() => {
            for (const key in data) {
                if (Object
                    .hasOwnProperty
                    .call(data, key)) {
                    const element =
                        data[key];
                    if (element
                        .title ==
                        inputData[0]
                            .value) {
                        document
                            .querySelector(
                                '.addError'
                            )
                            .innerText =
                            "الاثر موجود بالفعل ⚠️"
                        loading
                            .classList
                            .remove(
                                "active")
                        return
                    }
                    else {
                        document
                            .querySelector(
                                '.addError'
                            )
                            .innerText =
                            ""
                    }
                }
            }
            database.ref(
                'allMonuments/' +
                Object.keys(data)
                    .length + "/")
                .set({
                    title: inputData[
                        0].value,
                    p: inputData[1]
                        .value,
                    image: inputData[
                        2].value
                })
            if (inputData[3]
                .checked) {
                database.ref('home/')
                    .on('value', function (
                        snapshot) {
                        data =
                            snapshot
                                .val()
                    })
                setTimeout(() => {
                    database.ref(
                        'home/' +
                        Object
                            .keys(
                                data
                            )
                            .length +
                        "/")
                        .set({
                            title: inputData[
                                0
                            ]
                                .value,
                            p: inputData[
                                1
                            ]
                                .value,
                            image: inputData[
                                2
                            ]
                                .value
                        })
                    loading
                        .classList
                        .remove(
                            "active"
                        )
                    alert(
                        "تم الاضافة")
                    inputData[0]
                        .value =
                        ""
                    inputData[1]
                        .value =
                        ""
                    inputData[2]
                        .value =
                        ""
                }, 2000);
            }
            else {
                alert("تم الاضافة")
                loading.classList
                    .remove("active")
                inputData[0].value =
                    ""
                inputData[1].value =
                    ""
                inputData[2].value =
                    ""
            }
        }, 3000);
    }
    else {
        document.querySelector(
            '.addError')
            .innerText =
            "برجاء ادخال معلومات حقيقية ⚠️"
    }
}
function allFormAdmin(params) {
    document.querySelector('.logged')
        .remove()
    allForm('gg', true, true)
}
