// @ts-check
// indexCounter
let indexCounter = 0
const imgSrc = ['01', '02', '03', '04']

// slide mooth image function
const imageSlide = (indexCounter) => {
    // @ts-ignore
    document.getElementById('img').src = `./images/${imgSrc[indexCounter]}.jpg`
}

// function for create dot
const createDot = (imageElements) => {
    const dotGroup = document.getElementById('dot-group')
    for (let dotID = 0; dotID < imageElements; dotID++) {
        const newDot = document.createElement('div')
        newDot.className = 'dot'
        newDot.id = `${dotID}`
        newDot.onclick = () => {
            clickDot(dotID, imageElements)
        }
        dotGroup.appendChild(newDot)
    }
}

const clickDot = (dotID, imageElements) => {
    indexCounter = dotID
    imageSlide(dotID)
    changeDot(imageElements)
}

const changeDot = (imageElements) => {
    for (let dotID = 0; dotID < imageElements; dotID++) {
        var dot = document.getElementsByClassName('dot')
        if (dot[dotID].classList.contains('active')) {
            dot[dotID].classList.remove('active')
        }
    }
    document.getElementsByClassName('dot')[indexCounter].classList.add('active')
}

// function for slide
const imageDisplay = (imageElements, newIndex) => {
    const lastIndex = imageElements - 1
    if (newIndex < 0) {
        indexCounter = lastIndex
    } else if (newIndex > lastIndex) {
        indexCounter = 0
    } else {
        indexCounter = newIndex
    }
    imageSlide(indexCounter)
}

// start function for call another function
const start = () => {
    imageSlide(indexCounter)
    const imageElements = imgSrc.length
    const prevBtn = document.getElementById('prev')
    const nextBtn = document.getElementById('next')

    //create dot
    createDot(imageElements)
    changeDot(imageElements)
    // previous button
    prevBtn.addEventListener('click', () => {
        imageDisplay(imageElements, indexCounter - 1)
        changeDot(imgSrc.length)
    })

    // next button
    nextBtn.addEventListener('click', () => {
        imageDisplay(imageElements, indexCounter + 1)
        changeDot(imgSrc.length)
    })
}
