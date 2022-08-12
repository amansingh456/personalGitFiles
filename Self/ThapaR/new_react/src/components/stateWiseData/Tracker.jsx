import React, { useEffect, useState } from 'react'
import './tracker.css'




function Tracker() {

    const[data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')

            const actualData = await res.json()
            setData(actualData.statewise[0])
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <h2>🔴 LIVE</h2>
            <h1>covid-19 coronavirus tracker</h1>


            <section >
                <div className="card__main one">
                    <div className="card__inner">
                        <p className='card__name'><span style={{paddingLeft:"25%", fontSize: "22px"}}>OUR</span><span style={{paddingLeft:"10px", fontSize: "32px", fontFamily:"monospace"}}>COUNTRY</span> </p>
                        <p className="card__total card__small">INDIA</p>
                    </div>
                </div>

                <div className="card__main two">
                    <div className="card__inner">
                        <p className='card__name'><span style={{paddingLeft:"23%", fontSize: "22px"}}>TOTAL</span><span style={{paddingLeft:"10px", fontSize: "32px", fontFamily:"monospace"}}>RECOVERED</span> </p>
                        <p className="card__total card__small">{data.recovered}</p>
                    </div>
                </div>

                <div className="card__main three">
                    <div className="card__inner">
                        <p className='card__name'><span style={{paddingLeft:"23%", fontSize: "22px"}}>TOTAL</span><span style={{paddingLeft:"10px", fontSize: "32px", fontFamily:"monospace"}}>CONFIRMED</span> </p>
                        <p className="card__total card__small">{data.confirmed}</p>
                    </div>
                </div>

                <div className="card__main four">
                    <div className="card__inner">
                        <p className='card__name'><span style={{paddingLeft:"25%", fontSize: "22px"}}>TOTAL</span><span style={{paddingLeft:"10px", fontSize: "32px", fontFamily:"monospace"}}>DEATHS</span> </p>
                        <p className="card__total card__small">{data.deaths}</p>
                    </div>
                </div>

                <div className="card__main five">
                    <div className="card__inner">
                        <p className='card__name'><span style={{paddingLeft:"25%", fontSize: "22px"}}>TOTAL</span><span style={{paddingLeft:"10px", fontSize: "32px", fontFamily:"monospace"}}>ACTIVE</span> </p>
                        <p className="card__total card__small">{data.active}</p>
                    </div>
                </div>

                <div className="card__main six">
                    <div className="card__inner">
                        <p className='card__name'><span style={{paddingLeft:"25%", fontSize: "22px"}}>LAST</span><span style={{paddingLeft:"10px", fontSize: "32px", fontFamily:"monospace"}}>UPDATED</span> </p>
                        <p className="card__total card__smallx">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tracker