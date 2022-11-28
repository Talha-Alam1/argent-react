import React, { useEffect } from 'react'
import { useState } from 'react';
import LiveIcon from '../images/radio-antenna.png';
import CountUp from 'react-countup';

function Covid() {

    const [data, setData]= useState([]);

    const govCovidData = async () => {
        try {
            let response = await fetch('https://data.covid19india.org/data.json');
            let actualData = await response.json();
            setData(actualData.statewise[0]);
        } catch (error){
            console.error();
        }
    }
    
    useEffect(() => {
      govCovidData();
    }, []);
    
    
  return (
    <>
        <section className="covid section-padding">
            <div className="container">
                <div className="sec-title text-center">
                    <h2 className='text-primary'><img src={LiveIcon}></img>Live</h2>
                    <h3 className='text-success'>Covid-19 Real Time Data</h3>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="item text-center">
                            <h3>Our Country</h3>
                            <h4>Pakistan</h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="item text-center">
                            <h3><span>Total</span> Confirmed Cases</h3>
                            <h4><CountUp start={0} end={data.confirmed} delay={1} /></h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="item text-center">
                            <h3>Total Deaths</h3>
                            <h4><CountUp start={0} end={data.deaths} delay={1} /></h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="item text-center">
                            <h3>Total Active</h3>
                            <h4><CountUp start={0} end={data.active} delay={1} /></h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="item text-center">
                            <h3>Total Recovered</h3>
                            <h4><CountUp start={0} end={data.recovered} delay={1} /></h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="item text-center">
                            <h3>Last Updated Time</h3>
                            <h4>{data.lastupdatedtime}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  ) 
}

export default Covid