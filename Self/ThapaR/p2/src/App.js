import React from 'react'
// import img1 from './images/extra.jpg' 
import Cards from './Cards'
import Sdata from './Sdata'


const favSeries = "Netflix"


if(favSeries == 'Netflix'){
    }
else{

}




const App = () =>(


    <>

        <h1 className='heading'>List of top 5 Netflix of 2020</h1>

        {/* <div className='wrapper'> */}

            {Sdata.map((val) => {
                return (

                    <Cards
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                         />
            )
               
            })}

        {/* </div> */}


    </>
)  

     export default App