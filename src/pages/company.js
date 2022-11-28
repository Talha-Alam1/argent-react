import React from 'react'
import AboutImage from '../images/about.png'
import Foundation from '../images/foundation.png'
import FoundationOne from '../images/foundation1.png'
 
function company() {
  return (
    <>
        <section className="banner inner">
            <div className="container">
            <div className="text-center">
                <h1>About Argent®</h1>
            </div>
            </div>
        </section>
        <section className="two-column section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="column">
                            <img src={AboutImage} alt="image"></img>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="column">
                            <div className="aboutpin">
                                About Us
                            </div>
                            <p>Argent® has been been a leader in the systems management business since 1991 and has over 2,000 customers worldwide, including Social Security Administration, Royal Bank of Scotland, Sony Music Entertainment, US Naval Undersea Warfare Center, Zurich Insurance, US Capitol Police, United Healthcare, Mazda, Wyndham Vacations, ETH Zurich, Bank of Ireland, Winthrop University, Bermuda Monetary Authority, Intelsat, Nationwide Insurance, FIS, Coralisle Group, FiServ, City of Milwaukee, SP+, University of Wisconsin, and Massachusetts Dept. of Employment.
                            </p>
                            <span className="primary-color">Argent® is privately-held with no debt and no outside financing.<br />
                                In 2023, Argent's growth is expected to be 25% in terms of both revenue and unit sales.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="two-column section-padding foundation">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="column">
                            <div className="img-wrap">
                                <h2>Argent <br />
                                    Foundation</h2>
                                <img src={FoundationOne} alt="image"></img>
                            </div>
                            <span>The Argent Foundation, Inc. is a separate nonprofit charitable organization supported by contributions from the Argent group of companies. The Argent Foundation was established to provide monetary grants as well as pro bono assistance to charities and non-profit organizations around the world. For more information on the Argent Foundation, please email <a href="#">ArgentFoundation@Argent.com</a></span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="column">
                            <div className="img-wrap">
                                <img src={Foundation} alt="image"></img>
                            </div>
                            <span>The Argent Foundation performs pro bono systems integration as well as training and counseling for high-school seniors. Some current projects the Argent Foundation is performing are in the U.S., Bermuda, Australia and the U.K. The Argent Foundation also offers matching grants.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )     
}

export default company