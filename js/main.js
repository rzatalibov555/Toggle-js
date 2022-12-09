

// function openChat(){
//     document.getElementById('chat_button').style.opacity = "0"
//     document.getElementById('chat_message').style.right = "0px"
// }

// function closeChat(){
//     document.getElementById('chat_button').style.opacity = "1"
//     document.getElementById('chat_message').style.right = "-200px"
// }

function send(){

    var element = document.getElementById("chat_message")
    element.classList.toggle("chSide");

    var element = document.getElementById("message")

    // element.style.display = "block"
    // element.value 
    // element.placeholder 
    // element.id

    var result = val
    console.log(result)
}


function myFunction(e) {
  e.classList.toggle("fa-angle-double-right");
}

function funct(){
    var element = document.getElementById("chat_message")
    element.classList.toggle("chSide");
}


function startActivate(){
  
    document.getElementById("myIcon").innerHTML = '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'
}