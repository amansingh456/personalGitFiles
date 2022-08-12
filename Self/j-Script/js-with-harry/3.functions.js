// Simple Function

function loyal() {
    console.log('singHppyBirthday')
}
loyal()




//  Return function..

function avg(a, b) {  //  bracket ke ander (parameters hote hai) isme kya hai hum kitne bar bhi value de sakte hai..
    return (a + b) / 2
}
c = avg(34, 56)                     // ab hum parameters me agrguments pass kr rhe hai.
c2 = avg(89, 32)  // ye hota hai function ko call karana
console.log(c  , c2)  // to is se kya hai avg nikl aaya dono number ka or agr retun function nhi lagate to bar bar simple function lagana padta jitni bar avg nikalna hota utni bar






// Conditionals In JS 

var age = 18

function xxx() {

    if (age > 18) {
        console.log(' Hurrah! You Can Drink.  :)')
    }
    else if(age < 18){
        console.log('Soory! Man You Can Not Drink.')
     }
    else{
        console.log('jawani suru hui hai abhi thodi taselli karo')
    }

}
xxx()