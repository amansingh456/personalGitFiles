// let  taskbar = document.getElementsByClassName('taskbar')[0]
// let  startmenu = document.getElementsByClassName('startmenu')[0]

// taskbar.addEventListener('click', () => {
//     if(startmenu.style.bottom == '62px'){
//         startmenu.style.bottom = '-655px'
//     }

//     else{
//         startmenu.style.bottom = '62px'
//     }
// })





$(document).ready(function(){
    $('#a').click(function(){
        $('#b').slideToggle()
    })
})