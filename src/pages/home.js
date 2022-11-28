import React , {useEffect} from 'react'
import BannerImage from '../images/homeBanner.png';
import BtnArrow from '../images/right-arrow.svg';
import Sign from '../images/sign.png';
import CategoryArrow from '../images/categoryIcon.svg';
import CategoryIcon from '../images/categoryIcon1.svg';
import DownloadIcon from '../images/download.svg';
import PdfIcon from '../images/pdficon.svg';
import Covid from '../components/covid';

function Home() {
    
  return (
    <>
        <section className="banner home">
            <div className="container">
            <div className="row">
                    <div className="col-sm-6">
                        <div className="content">
                            <h1>Be Fully<br/> Cjis <span>Compliant</span></h1>
                            <h2>By the End of <span>Today</span></h2>
                            <p>With Argent's new Al-based compliance products, we can have you completely CJIS compliant in an afternoon Skeptical?</p>
                            <a href="/contact" className="btn d-flex">Just click here <img src={BtnArrow} alt="Icon" /></a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="images">
                            <img src={BannerImage} alt="image" />
                        </div>
                    </div>

            </div>
            </div>
        </section>
        <Covid />
        <section className="about section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="content">
                            <h3>Learn About Us</h3>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="content">
                            <p>Argent® has been been a leader in the systems management business / since 1991</p>
                            <p>and has over 2,000 customers worldwide, including Social Security Administration, Royal Bank of Scotland, Sony</p>
                            <a href="/company" className="btn d-flex small">Learn About Us <img src={BtnArrow} alt="Icon" /></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sign">
                            <img src={Sign} alt="Icon" />
                            <h5>Co - Founder</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="counter-items">
                            <div className="counter-item">
                                <div className="counter-num">
                                    <span className="stat">500.00</span>
                                </div>
                                <h5>Teammates</h5>
                            </div>
                            <div className="counter-item">
                                <div className="counter-num">
                                    <span className="stat">07.00</span>
                                </div>
                                <h5>Projects</h5>
                            </div>
                            <div className="counter-item">
                                <div className="counter-num">
                                    <span className="stat">08.00</span>
                                </div>
                                <h5>Average Team Size</h5>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <section className="category section-padding">
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Industries We category</h2>
                    <p>Argent® is privately-held with no debt and no outside financing.</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <a href="/products" className="category-item">
                            <img className="icon" src={CategoryIcon} alt="Icon" />
                            <h3>Argent Omega</h3>
                            <p>Free 14-day evaluation <span><img src={CategoryArrow} alt="Icon" /></span></p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <a href="/products" className="category-item">
                            <img className="icon" src={CategoryIcon} alt="Icon" />
                            <h3>Argent Omega</h3>
                            <p>Free 14-day evaluation <span><img src={CategoryArrow} alt="Icon" /></span></p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <a href="/products" className="category-item">
                            <img className="icon" src={CategoryIcon} alt="Icon" />
                            <h3>Argent Omega</h3>
                            <p>Free 14-day evaluation <span><img src={CategoryArrow} alt="Icon" /></span></p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <a href="/products" className="category-item">
                            <img className="icon" src={CategoryIcon} alt="Icon" />
                            <h3>Argent Omega</h3>
                            <p>Free 14-day evaluation <span><img src={CategoryArrow} alt="Icon" /></span></p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <a href="/products" className="category-item">
                            <img className="icon" src={CategoryIcon} alt="Icon" />
                            <h3>Argent Omega</h3>
                            <p>Free 14-day evaluation <span><img src={CategoryArrow} alt="Icon" /></span></p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <a href="/products" className="category-item">
                            <img className="icon" src={CategoryIcon} alt="Icon" />
                            <h3>Argent Omega</h3>
                            <p>Free 14-day evaluation <span><img src={CategoryArrow} alt="Icon" /></span></p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <a href="/products" className="category-item">
                            <img className="icon" src={CategoryIcon} alt="Icon" />
                            <h3>Argent Omega</h3>
                            <p>Free 14-day evaluation <span><img src={CategoryArrow} alt="Icon" /></span></p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <a href="/products" className="category-item">
                            <img className="icon" src={CategoryIcon} alt="Icon" />
                            <h3>Argent Omega</h3>
                            <p>Free 14-day evaluation <span><img src={CategoryArrow} alt="Icon" /></span></p>
                        </a>
                    </div>
                    
                    
                </div>
                <div className="view">
                    <a href="/products" className="btn d-flex small">View All Industries <img src={BtnArrow} alt="Icon" /></a>
                </div>
            </div>
        </section>
        <section className="products-wrap section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="content">
                            <h2>
                                Our Products
                            </h2>
                            <p>
                                without compromising quality. PF was founded by a small team. Our DNA comprises of artificial intelligence, machine learning, UI/UX, and software development.
                            </p>
                            <a href="/products" className="btn d-flex small">View All Products <img src={BtnArrow} alt="Icon" /></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="item">
                            <h4>Argent Job Scheduler</h4>
                            <h6>Argent World View is a Web 2.0 interface for Argent Job Scheduler.</h6>
                            <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. </p>
                            <a href="#">For a live demo site visit here</a>
                        </div>
                        <div className="item">
                            <h4>Argent Job Scheduler</h4>
                            <h6>Argent World View is a Web 2.0 interface for Argent Job Scheduler.</h6>
                            <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. </p>
                            <a href="#">For a live demo site visit here</a>
                        </div>
                        <div className="item">
                            <h4>Argent Job Scheduler</h4>
                            <h6>Argent World View is a Web 2.0 interface for Argent Job Scheduler.</h6>
                            <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. </p>
                            <a href="#">For a live demo site visit here</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="papers section-padding">
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Comparison and White Papers	</h2>
                    <p>All of Argent's White Papers and Comparison Papers can be downloaded for free.</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="papers-item">
                            <img className="icon" src={PdfIcon} alt="Icon" />
                            <h5>Argent Omega</h5>
                            <a href="#"><img src={DownloadIcon} alt="Icon" /> Download</a>
                            <div className="new">
                                <span>New</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="papers-item">
                            <img className="icon" src={PdfIcon} alt="Icon" />
                            <h5>Argent Omega</h5>
                            <a href="#"><img src={DownloadIcon} alt="Icon" /> Download</a>
                            <div className="new">
                                <span>New</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="papers-item">
                            <img className="icon" src={PdfIcon} alt="Icon" />
                            <h5>Argent Omega</h5>
                            <a href="#"><img src={DownloadIcon} alt="Icon" /> Download</a>
                            <div className="new">
                                <span>New</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="papers-item">
                            <img className="icon" src={PdfIcon} alt="Icon" />
                            <h5>Argent Omega</h5>
                            <a href="#"><img src={DownloadIcon} alt="Icon" /> Download</a>
                            <div className="new">
                                <span>New</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view">
                    <a href="/papers" className="btn d-flex small">View All White Papers<img src={BtnArrow} alt="Icon" /></a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home