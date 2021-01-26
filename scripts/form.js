const tagBold = () => {
    let userData = (document.getElementById('user-data').value += `<b></b>`)
}

const tagUl = () => {
    let userData = (document.getElementById('user-data').value += `<ul></ul>`)
}

const tagLi = () => {
    let userData = (document.getElementById('user-data').value += `<li></li>`)
}

const sendForm = () => {
    const userTitle = document.getElementById('user-title').value
    const userData = document.getElementById('user-data').value
    if (userTitle.length < 4 || userTitle.length > 140) {
        alert('กรุณาใส่หัวข้อกระทู้ตั้งแต่ 4 ตัวอักษร ถึง 140 ตัวอักษร')
        return
    }

    if (userData.length < 6 || userData.length > 2000) {
        alert('กรุณาใส่กระทู้ตั้งแต่ 6 ตัวอักษร ถึง 2000 ตัวอักษร')
        return
    }

    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('r-title').innerHTML = this.responseText
        }
    }
    xhttp.open('POST', 'https://dek-d-t6tg.vercel.app/api', true)
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhttp.setRequestHeader(('Access-Control-Allow-Headers', '*'))
    xhttp.send(`title=${userTitle}&data=${userData}`)
}
