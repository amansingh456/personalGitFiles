// function declraetion , mtlv function declare karna 

function singhappybirthday(){
    console.log('happy birthday')
}


singhappybirthday()











//-----

function twoplusfor(){
    console.log(2+4)
}

twoplusfor()













//-----
// returned function , returned value me hum value retun kr lete 

function sumtwonum(num1, num2){
    return num1+num2
}

const returnedValue = sumtwonum(23,34)
console.log(returnedValue)














//----
// odd or even check

function isTrue(number){
    if(number % 2 === 0){
        return true
    }

    else{
        return false
    }
}

console.log(isTrue(8),)

















//-----

function target(array,target){
    for(let i =0; i<array.length; i++){
        if(array[i]===target){
            return i
        }
    }
}

const myarray = [2,3,6,1,67,76,54,44,67]
const ans = target(myarray, 89)
console.log(ans)
















//-----

const myrat = [2,5,7,9,56,43,221]  // myrat nam ka array banaya

function topx(array, target){
    for(let i = 0; i<array.length; i++ ){
        if(array[i]===target){
        return i
        }
    }
    return -1
}



const ansx = topx(myrat,43)
console.log(ansx)