
// types of function....
// (1). no return, no  pass

function love(){
    a=12
    b=12
    console.log(a+b)
}

love() // dekho yha humne variable ki value define ki function call kiya or vo chl rha hai na hi function retun kiya na pass kiya





// (2). no return, but pass

function ror(a=10,b=30){
    c=a+b
    console.log(c)
}
ror(50) // ab isme kya hua hai mene function call karaya to value likhi hai function me 50 vo a  ki value smjhega  isliye ans 80 aa rha hai...







// (2.a).  example of no return but pass (...function)

function sum(...a){
 console.log(a)
}

sum(10,20,30,40,50)





// return, no pass

function yupp(){
    a=34
    b=45
    return(a+b)
    
}

x=yupp()
console.log(x)





// (4). return, pass

function tup(a=98,b=97){
    return(a+b)
}
x=tup(46,67)
console.log(x)