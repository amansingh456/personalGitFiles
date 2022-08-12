// // 1. method
// let a;
// let date;
// let timex;
// const options = {weekday:'long', year:'numeric', month:'long', day:'numeric'} 

// setInterval(() => {
// a = new Date()
// h = a.getHours()
// m = a.getMinutes()
// s = a.getSeconds()
// tarik = a.toLocaleDateString(undefined,options)

// date = tarik
// timex = h+':'+m+':'+s

// document.getElementById('time').innerHTML = timex+ '<br> on '  +date 
// }, 1000);




// 2. method

function digi(){
   const t= new Date()

    let h= t.getHours() 
    let m= t.getMinutes() 
    let s= t.getSeconds() 
    let options = {weekday:'long', year:'numeric', month:'long', day:'numeric'}
    let one = t.toLocaleDateString(undefined,options)
     


    if(h>12){
        h=h-12
        document.getElementById('tttt').innerHTML=h+':'+m+':'+s+' PM' +' <br> on' +one
    }
    else{
        h=h
        document.getElementById('tttt').innerHTML=h+':'+m+':'+s+' AM' +' <br> on' +one
    }


   
}

setInterval('digi()', 1000)