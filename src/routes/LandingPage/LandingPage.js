import React, { Component } from 'react'
import './LandingPage.css'
import CTR from '../../img/CTRwide.jpg'
import AB from '../../img/ABwide.png'
import YT from '../../img/youtubewide.jpg'

class Landing extends Component {
  pushToLogin = () => {
    this.props.history.push('/login')
  }
  render() {
    return (
      <>
      <main className="landing-page-container">
        <section className='hero page'>
          <h1 className="slogan">
            Let your thumbnail do the talking.
          </h1>
        </section>
        <section className='about'>
          <div className="AboutText">
            <h3>
              What We Do
            </h3>
            <p className="p">
              Laconic allows you to see what your YouTube thumbnails will look like before you publish them. Save and compare multiple thumbnails related to a video. When you decide which thumbnail to use, copy the fields directly from Laconic and publish your video!  
          </p>
            <div className="btn-container">
              <button onClick={this.pushToLogin} className='create-laconic'>
                Create with Laconic
          </button>

            </div>
          </div>
        </section>
        <section className='click-through'>
          <h3>
            What Is Click-Through Rate?
          </h3>
          <figure className="images">
            <img className="CTRimage"  src={CTR} alt="Click through rate" />
          </figure>
          <div className="CTRtext">
              <p className="p">
            CTR is the rate at which your videos are clicked. This number is the percentage of people who view your video (impressions) and then actually go on to click the video (clicks). The formula for CTR looks like this:
          </p>
          <h4>
            (Total Clicks on Video) / (Total Impressions) = Click Through Rate
          </h4>
              <p className="p">
            Generally, you can view your click-thru rate within the dashboard of your YouTube account. A high CTR means that a high percentage of people who see your video click it.
          </p>
          </div>
        </section>
        <section className='AB-testing'>
          <h3>
              A/B Testing
          </h3>
          <figure className="images">
            <img className="ABimage" src={AB} alt="A/B Testing" />
          </figure>
          <div className="ABtext">
    
              <p className="p">
            An “A/B Test” is a test where 2 variants of something (anything) is tested for equal amounts of time, to see which version performs the best.
            In this case, what is being tested and compared is 2 versions of a thumbnail, of your own choosing. By uploading 2 thumbnails into the system, they are changed each day automatically on your channel (for a chosen period), and by the end of the test we automatically gather the data from your YouTube Analytics and see which of the thumbnails resulted in the most views.
          </p>
          </div>
        </section>
      </main>
      </>
    );
  }
}

export default Landing