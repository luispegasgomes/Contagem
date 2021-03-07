//btn verify
function verify() {
    let date = new Date()
    let year = date.getFullYear()
    let fyear = document.getElementById('txtyear')
    let res = document.querySelector('div#res')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('This values are wrong, try again :(')
    } else {
        let fsex = document.getElementsByName('radsex')
        let age = year - Number(fyear.value)
        let gender = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gender = 'man'
            if (age >= 0 && age < 10) {
                img = img.setAttribute('src', '../img/foto-bebe-m.png')
            } else if (age < 21) {
                img.setAttribute('src', '../img/foto-jovem-m.png')
            } else if (age < 50) {
                img.setAttribute('src', '../img/foto-adulto-m.png')
            } else {
                img.setAttribute('src', '../img/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gender = 'woman'
            if (age >= 0 && age < 10) {
                img.setAttribute('src', '../img/foto-bebe-f.png')
            } else if (age < 21) {
                img.setAttribute('src', '../img/foto-jovem-f.png')
            } else if (age < 50) {
                img.setAttribute('src', '../img/foto-adulto-f.png')
            } else {
                img.setAttribute('src', '../img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `A ${age} years old ${gender} was detected.`
        res.appendChild(img)
    }
}