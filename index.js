import {Dog} from './Dog.js'
import {dogsData} from '/data.js'



const heartBtn = document.getElementById("heart-btn")
const crossBtn = document.getElementById("cross-btn")
const firstDog = new Dog(dogsData[0])
const avatarContainer = document.getElementById("avatar-container")
const dogsDataLength = (dogsData.length) - 1
let swipe = 0
let testDog = new Dog(dogsData[swipe]) 

heartBtn.addEventListener('click', function(){
    testDog.hasBeenLiked = true
    testDog.hasBeenSwiped = true
    likeCheck(testDog)
    setTimeout(render, 500)    
})

crossBtn.addEventListener('click', function(){
    testDog.hasBeenSwiped = true  
    nopeCheck(testDog)
    setTimeout(render, 500)
})



function likeCheck(dog){
        
    if (dog.hasBeenLiked) {
     swipe == dogsDataLength ? swipe = 0 : swipe += 1 
     document.getElementById("liked").style.display="block"
    }
}

function nopeCheck(dog){
     swipe == dogsDataLength ? swipe = 0 : swipe += 1 
     document.getElementById("nope").style.display="block"     
}




function render(){
    testDog = new Dog(dogsData[swipe])
    avatarContainer.innerHTML = testDog.dogPicHtml()
    document.getElementById("liked").style.display="none"
    document.getElementById("nope").style.display="none"
}

render()