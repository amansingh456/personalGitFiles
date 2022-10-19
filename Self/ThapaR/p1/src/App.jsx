import React from "react";


function App(){
    // new Date(year, month, day, hours, minutes, seconds, miliseconds)

    let currDate = new Date() //(2022,10,13,22)--> like this we can simply give the random value also
    currDate = currDate.getHours()

    let greeting = ''
    var cssStyle = {}


    if(currDate > 1 && currDate < 12 ){
        greeting = 'Good Morning'
        cssStyle.color = '00b894' 
    }

    else if(currDate >= 12 && currDate <20){
        greeting = 'Good Noon '
        cssStyle.color = 'orange'
    }

    else{
        greeting = 'Good Night'
        cssStyle.color = 'black'
    }



    return(
        <>  
            <div>
            <h1>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
            </div>
        </>
    )

   

}

export default App