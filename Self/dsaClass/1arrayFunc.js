//! When User visiting  many sites on the same tab.
// * But actually this work on STACKS principle lastInFirstOut(LIFO), (mtlv jo value last me aayegi vo pehle niklegi)

let browser = []
let forwardBucket = []



function visit(url){
    browser.push(url)
    console.log("Browser:",browser)

    let n = browser.length-1
    let  CurrentPage = browser[n]
    console.log("Current Page:",CurrentPage)

    console.log("\n")
    
}

function backbtn(){
    let element =  browser.pop()
    forwardBucket.push(element)

    console.log("Browser:",browser)

    let n = browser.length-1
    let CurrentPage = browser[n]
    console.log("Current Page:",CurrentPage)

    console.log("\n")
}


function forwardbtn(){
    let element = forwardBucket.pop()
    browser.push(element)

    console.log("Browser:",browser)

    let n = browser.length-1
    let CurrentPage = browser[n]
    console.log("Current Page:",CurrentPage)

    console.log("\n")
}

visit("google.com")
visit("YT.com")
backbtn()
forwardbtn()

