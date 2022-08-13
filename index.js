'use strict'

const appsIcon = document.querySelector(".apps-icon")
const userIcon = document.querySelector(".user")
const appsContainer = document.querySelector(".apps-container")
const userCounts = document.querySelector(".user-count")


appsIcon.addEventListener("click", (e)=>{
    if(userCounts.classList.contains("showContainer")){
        userCounts.classList.remove('showContainer')
    }
    appsContainer.classList.toggle("showContainer")
})

userIcon.addEventListener("click", ()=>{
    if(appsContainer.classList.contains("showContainer")){
        appsContainer.classList.remove('showContainer')
    }
    userCounts.classList.toggle("showContainer")
})

window.addEventListener("click", (e)=>{
    if(e.target != appsIcon && appsContainer.classList.contains("showContainer")){
        appsContainer.classList.remove('showContainer')
    }

    if(e.target != userIcon && userCounts.classList.contains("showContainer")){
        userCounts.classList.remove('showContainer')
    }
})


