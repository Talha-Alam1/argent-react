import React from 'react'
import WhitePapers from '../components/whitePapers'

function papers() {
  return (
    <>
        <section className="banner inner">
            <div className="container">
            <div className="text-center small">
                <h1>White Papers And Comparisons</h1>
                <p>All of Argent's White Papers and Comparison Papers can be downloaded for free.</p>
            </div>
            </div>
        </section>
        <WhitePapers />
    </>
  )
}

export default papers