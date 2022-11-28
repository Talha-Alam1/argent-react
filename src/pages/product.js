import React from 'react'

function product() {
  return (
    <>
    <section className="banner inner">
        <div className="container">
          <div className="text-center">
            <h1>Products</h1>
          </div>
        </div>
    </section>
    <section className="productswrap">
        <div className="container">
            <div className="main-wrap">
                {/* accordion */}
                <div className="accordions" id="accordion">
                    <div className="card">
                    <div className="card-header" id="headingOne">
                        <button className="btn btn-link p-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Batch Job Automation
                        </button>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            {/* Tabs List */}
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-selected="true">Argent Job Scheduler</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two" aria-selected="false">Argent WorldView</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="three" aria-selected="false">Argent Job</a>
                                </li>
                            </ul>
                            {/* Tabs List */}
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header" id="headingTwo">
                        <button className="btn btn-link p-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            System and Applications
                        </button>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                        {/* Tabs List */}
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                            <a className="nav-link active" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-selected="true">Argent Job Scheduler</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two" aria-selected="false">Argent WorldView</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="three" aria-selected="false">Argent Job</a>
                            </li>
                        </ul>
                        {/* Tabs List */}
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header" id="headingThree">
                        <button className="btn btn-link p-0 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            System and Applications
                        </button>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            {/* Tabs List */}
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-selected="true">Argent Job Scheduler</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two" aria-selected="false">Argent WorldView</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="three" aria-selected="false">Argent Job</a>
                                </li>
                            </ul>
                            {/* Tabs List */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* tab-content */}
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
                        <h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p>
                        <h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p><h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p><h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p><h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p><h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p><h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p><h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p><h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p><h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p><h3>1 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p>
                    </div>
                    <div className="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
                        <h3>2 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p>
                    </div>
                    <div className="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
                        <h3>3 Argent Job Scheduler</h3>
                        <p>The days of manually scheduling and managing batch processes are over. Business process automation lowers overall IT costs, ensures application efficiency, enhances IT service and assists with compliance requirements. Argent Job Scheduler and Argent Queue Engine automate business processes, alert customers via Argent Console when issues occur and provide Service Level Agreements so that management receives the Business View of IT. Argent Job Scheduler provides a single point of control across all operating systems, applications and databases for Windows, Linux, Solaris, HP-UX, AIX, SCO and iSeries Servers.</p>
                        <p>
                        Business process automation is simplified with Argent Job Scheduler and Argent Queue Engine. Installation requires no reboot. Argent Job Scheduler has a comprehensive feature set, including complete forecasting, auditing, calendaring, and failover as well as job and file dependency support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default product