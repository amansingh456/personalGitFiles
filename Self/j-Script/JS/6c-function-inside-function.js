// ek functiion ke ander apn kitne bhi function bna sakte hai...



const app = () =>{           // ye ek arrow function hai, ab iske ander ek or function bna rahe hai..
    const myFunc = () => {
        console.log('hello myfunc, how are you')
    }
    const laxmi = () => {
        console.log('hello laxmi,  i luvv uhhh')
    }
    const sumFun = (num1,num2) => {
        return num1+num2
    }
    
    console.log('we are the Indians')
    myFunc()
    laxmi()
    console.log(sumFun(4,5)) // return function me console.log me function ko call karana padta hai..
}

app()












// Lexical scape


let yupp = 'how dare you ? , '

function myApp(){

    let myVarx = 'you are the hero , '
    console.log(myVarx)




    function user(){
    let myVar = 'value 69'
    console.log('inside my User , ' , myVar, myVarx, yupp )// to isme jo myVar print hoga vo isika hoga , or agr ye myVar nhi hota to JS lexical environment ke ander check kregi to iska lexical environment hai myApp mr milega to thk hai vrna puri file me dekhegi to JS myApp to dekegi agr kahi milega to us jgh ki value de degi
    }


    const top = function(){}




    const myFunc = () => {}





    
    user()
}

myApp()