'use strict'

let images = document.getElementById("images")
let randomizeEl = document.getElementById("myButton")
let imgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
              

  randomizeEl.addEventListener('click', random) 
    function random(){
      images.innerHTML = " "
        imgArray.sort(function(){ return 0.1 - Math.random()})
          for (let i = 0; i < imgArray.length; i++) {
            images.innerHTML += `<img src="img/${imgArray[i]}">`
            }
        }
             
     

     