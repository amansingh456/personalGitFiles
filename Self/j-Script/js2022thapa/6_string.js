// ! Stirng in Js
// A Js String has zero or more chracters written inside quotes.

// JS String are used for storing and manipulating text.

// string can be created as primitive,from string literlas, or as objects, using the String() constructor.


let myName="Aman Singh Rajawat"
let myNickName='AiyaasH Rajawat'
console.log(myName)
console.log(typeof(myName))



// ! How TO find a length of a string
// String.prototype.length  ✌️

console.log(myName.length) // it returns the length of a string , space bhi count karta hai






// ! Ecsape Chracater(\) ✌️

// * let anySentace = "we are the so-called"Vikings"from the noorth"
// * console.log(anySentace) 


//  ab hume esi string print krna hai jisme ander bhi doule quotes chhiaye to hume lagana padega 
// todo: BackSlash Escape Chracter (\',\",\\)  , \ \ in dono slash ke bad jo bhi chracter ya symbol lga doge vo usi me show kr dega

let anySent= "we are the so-called \"Vikings\" from the noorth"
console.log(anySent)

let anySen= "we are the so-called \?Vikings\? from the noorth"
console.log(anySen)

let anySe= "we are the so-called \'Vikings\' from the noorth"
console.log(anySe)









// ! Finding a String in a String
// String.prototype.indexOf(searchValue [ , fromIndex])

// The indexOf() ✌️ method returns the index of (the position of) the first occurance of a specified text in the string.

let myBioData = "This is Aman Singh Rajawat"
console.log(myBioData.indexOf("Singh")) // index number zero se start hota hai.
console.log(myBioData.indexOf("R", 7))  // iska mtlv ye index 7 se R ko dhud rha hai -----> is direction me 


// ! LastIndexOf() ✌️ (ye reverse me search karta hai)
let myBio = "This is Aman Singh Rajawat"
console.log(myBio.lastIndexOf("A", 19))  // iska mtlv ye index 19 se A ko dhud rha hai <----- is direction me




// ! Searching a String inside the String
// String.prototype.search(regexp)

// The search()✌️ method seraches a string for a specified value and returns the posotion of the match

let myBios = "Nice to meet uhh Mr. Aman Singh Rajawat"
console.log(myBios.search("Mr.")) // ye bhi index hi bta rha hai abhi, lekin isme hum second arrgument pass karke check ni kar skte simple value dalo or search kro .












// !Extracting String Parts
// ? slice(start,end)
// ? substring(start,end)
// ? substr(start,length)



// slice() ✌️ method  (it takes 2 parameters)

var str1  = "Apple, Banana, kiwi"

let nStr1 = str1.slice(0,4) //(But isme end not included nhi hota or original data will not changed )
let nStr2 = str1.slice(0,-2) //(agr last me -2 rakh deneg to last tak jayega -2 chhod dega)
console.log(nStr1)
console.log(nStr2)


// ! Display only 280 chracter on string as instagram and twitter..
let myTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let myActualTweet = myTweets.slice(0,280)
console.log(myActualTweet)
console.log(myActualTweet.length) // ye dekho 280 chractcer hi de rha hai...











// ! subString() ✌️method (it dones not allow -indexing )

var str2  = "Apple, Banana, kiwi"
let resStr2 = str2.substring(0,4)
let resStr3 = str2.substring(9,-3) //(ye isme 1 position wale tak chalega -indexing ko 0 man lega pr uska koi mtlv nhi hai..)
console.log(resStr2)
console.log(resStr3)









// ! substr() ✌️ method (ye humne pdna hi nhi hai..)

















// ! Replacing String Content...
// replace()✌️ (searchFor, replaceWith)

let bioData = "Aman Singh Rajawat Aman"
let repBioData = bioData.replace("Aman","Aiyaash")
console.log(repBioData) // lekin isne last wale Aman ko nhi kiya jo pehle mila usi ko krega


// replaceAll() ✌️ 
let repBioData1 = bioData.replaceAll("Aman","Aiyaash")
console.log(repBioData1) // ye sabko replace kar dega..





// !Extracting String Chracter -->

// charAt(position)✌️
let strr = "HELLO WORLD"
let nstrr = strr.charAt(2)
console.log(nstrr) // ye sirf ye btata hai konse index pr konsa charcter hai..




// charCodeAt(position)✌️(utf code deta 0 se 63545 tak.. apne aap) (ye jayda hamare kam ka jyda nhi hai..)
let strrx = "HELLO WORLD"
let nstrrx = strr.charCodeAt(2)



// Property Access ✌️
let srrx = "HELLO WORLD"
console.log(srrx[0])  // is se bhi length mil jati hai....









// ! Other Useful Access

// toUpperCase() ✌️
// toLowerCase() ✌️

console.log(srrx.toLocaleLowerCase())
console.log(srrx.toLocaleUpperCase())





//trim()✌️ method (it reomves the extra space of string at both end...)
let rr = "     Hello World         "
console.log(rr.trim())







// ! String converts in array....
//split()✌️ method (convert string to array)

var text = "a,c,vd,esd,vs,s,cr,f"
console.log(text.split(",")) // split on comas (jha jha coma the wha se split kr k array bna diya)

var text2 = "avsgwvs skjnjkwb kjndjn kjwendjn"
console.log(text2.split(" ")) // split on space (jha jha space the wha se split kr k array bna diya)


var text3 = "avsgwvs|skjn|jkwb|kjndjn|kjwen|djn"
console.log(text3.split("|")) // split on space (jha jha ye(|) tha wha se split kr k array bna diya)



