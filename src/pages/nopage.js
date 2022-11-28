import React from 'react'
import BtnArrow from '../images/right-arrow.svg';

function nopage() {
  return (
    <>
        <section className="section-padding text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-padding">
                        <h1>404</h1>
                        <a href="/" className="btn d-flex" style={{margin: "0 auto"}}>Back to home page <img src={BtnArrow} alt="Icon" /></a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default nopage