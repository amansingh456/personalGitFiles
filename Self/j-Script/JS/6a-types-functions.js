// Functions Expresssion

function rohan(){
    console.log('hii rohan')
}

rohan()  // ye hai normal declration of function 
// ab isi ka function expression kese banaye







const rohit = function(){
    console.log('hii rohit')
}
rohit() // ye hai function expression , mtlv kisi function ko ek variable me asign kr dena or fir us variable ko call karana 





// 2nd example of function expression

const isEven = function(num){
    if(num % 2 === 0){
        return true
    }
    return false
}
const r = isEven(6)
console.log(r)












// Arrow functions...

const laxmi = () => {
    console.log('hi jaana')
}
laxmi() // to ye hai arrow function...


// nd the last thing is teeno function me se koi bhi use kr sakte hai... pr ek hi function do do bar call ni kra sakte ya tum socho ke ek hi function ko pehle is tarike se kr le fir dusre tarike se call karyae to error de dega

