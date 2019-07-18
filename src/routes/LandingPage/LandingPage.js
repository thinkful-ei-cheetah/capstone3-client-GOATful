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
      <main>
        <section className='hero page'>
          <h1>
            Let your thumbnail do the talking.
        </h1>
          <div>
            <h2 className='red'>
              With Laconic
          </h2>
          </div>
        </section>
          <section className='about'>
            <figure>
              <img className="AboutImage" src={YT} alt="YouTube" />
            </figure>
            <div className="AboutText">
              <h3>
                What we do
            </h3>
              <p>
                We Preview your thumbnails, so you can see what they will look like in Youtube's styling in both desktop and App view.
                Save your thumbnails so you can easily see the difference between the two.
                Keep all your thumbnail Ideas in one place!
            </p>
              <div className="btn-container">
                <button onClick={this.pushToLogin} className='create-laconic'>
                  Create with Laconic
            </button>

              </div>
            </div>
          </section>
        <div className='landing-container'>
          <section className='click-through'>
            <div className="CTRtext">
            <h3>
              So What Is Click-Through Rate, Anyway?
            </h3>
            <p>
              CTR is the rate at which your videos are clicked. This number is the percentage of people who view your video (impressions) and then actually go on to click the video (clicks). The formula for CTR looks like this:
            </p>
            <h4>
              (Total Clicks on Video) / (Total Impressions) = Click Through Rate
            </h4>
            <p>
              Generally, you can view your click-thru rate within the dashboard of your YouTube account. A high CTR means that a high percentage of people who see your video click it.
            </p>
            </div>
            <figure>
              <img className="CTRimage"  src={CTR} alt="Click through rate" />
            </figure>
          </section>

          <section className='AB-testing'>
            <figure>
              <img className="ABimage" src={AB} alt="A/B Testing" />
            </figure>
            <div className="ABtext">
            <h3>
               A/B Testing
            </h3>
            <p>
              An “A/B Test” is a test where 2 variants of something (anything) is tested for equal amounts of time, to see which version performs the best.
              In this case, what is being tested and compared is 2 versions of a thumbnail, of your own choosing. By uploading 2 thumbnails into the system, they are changed each day automatically on your channel (for a chosen period), and by the end of the test we automatically gather the data from your YouTube Analytics and see which of the thumbnails resulted in the most views.
            </p>
            </div>
          </section>

          
          
      </div>
        </main>
      </>
    );
  }
}

export default Landing