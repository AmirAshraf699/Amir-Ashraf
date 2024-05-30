function sendMail(e) {
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value,
        subject : document.getElementById('subject').value
    }


    emailjs.send('service_3v5lmdd','template_l5ct4ut', parms).then(alert("Message has been sent"))
}

let links = document.querySelector('header .links')
let toggle = document.querySelector('header .toggle-menu')

function openAndCloseLinks() {
    toggle.addEventListener("click", () => {
        if (links.classList.contains("open")) {
            links.classList.remove("open")
        } else {
            links.classList.add("open")
        }
    })
}

openAndCloseLinks()

let rightArrow = document.querySelector('.projects .container i.right')
let leftArrow = document.querySelector('.projects .container i.left')
let projects = document.querySelectorAll('.projects .project')
let projectsArray = Array.from(projects)

let current = 0


function movingProjects() {
    rightArrow.addEventListener("click", () => {
        projectsArray.forEach(project => {
            project.classList.remove("open")
        })
        
        current++
        increaseAndDecreasreCurrent()
    })
    
    leftArrow.addEventListener("click", () => {
        projectsArray.forEach(project => {
            project.classList.remove("open")
        })
        current--
        increaseAndDecreasreCurrent()
    })

    if (current === 2) {
        rightArrow.style.opacity = ".2"
        rightArrow.style.zIndex = "-1"
    } else if (current === 0 ){
        leftArrow.style.opacity = ".2"
        leftArrow.style.zIndex = "-1"
    } else {
        leftArrow.style.opacity = "1"
        leftArrow.style.zIndex = "3"
        rightArrow.style.opacity = "1"
        rightArrow.style.zIndex = "3"
    }

}

movingProjects()

function increaseAndDecreasreCurrent() {
    if (current === 2) {
        rightArrow.style.opacity = ".2"
        rightArrow.style.zIndex = "-1"
    } else if (current === 0 ){
        leftArrow.style.opacity = ".2"
        leftArrow.style.zIndex = "-1"
    } else {
        leftArrow.style.opacity = "1"
        leftArrow.style.zIndex = "3"
        rightArrow.style.opacity = "1"
        rightArrow.style.zIndex = "3"
    }
    projectsArray[current].classList.add("open")
}
