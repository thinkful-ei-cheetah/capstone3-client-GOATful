import React, { Component } from 'react'
import './Landing.css'

class Landing extends Component {
  componentDidMount() {
      console.log('I was mounted')
  }

  render() {

    return (
      <>
      <section className='hero'>
        <h1>
        Let your thumbnail do the talking.
        </h1> 
        <div>
          <h2 className='red'>
            With Laconic
          </h2>
        </div>
        </section>
        <div className='landing-container'>
          <section className='click-through'>
            <figure>
              <img src="https://www.lyfemarketing.com/blog/wp-content/uploads/2018/06/what-is-CTR.jpg" alt="Click through rate" />
            </figure>
            <h3>
            So What Is Click-Through Rate, Anyway?
            </h3>
            <p>
            is the rate at which your videos are clicked. This number is the percentage of people who view your video (impressions) and then actually go on to click the video (clicks). The formula for CTR looks like this:
            </p>
            <h4>
            (Total Clicks on Video) / (Total Impressions) = Click Through Rate
            </h4>
            <p>
            Generally, you can view your click-thru rate within the dashboard of your YouTube account. A high CTR means that a high percentage of people who see your video click it.
            </p>
          </section>

          <section className='AB-testing'>
          <figure>
              <img src="https://mzdpd1mg35f29101q1lbu25g-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/AB-guide-small.png" alt="A/B Testing" />
            </figure>
            <h3>
            WHAT IS A/B TESTING
            </h3>
            <p>
            An “A/B Test” is a test where 2 variants of something (anything) is tested for equal amounts of time, to see which version performs the best.
            In this case, what is being tested and compared is 2 versions of a thumbnail, of your own choosing. By uploading 2 thumbnails into the system, they are changed each day automatically on your channel (for a chosen period), and by the end of the test we automatically gather the data from your YouTube Analytics and see which of the thumbnails resulted in the most views.
            </p>
          </section>

          <section className='about'>
            <figure>
              <img src="https://images.unsplash.com/photo-1521302200778-33500795e128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="YouTube" />
            </figure>
            <h3>
              What we do
            </h3>
            <p>
              We Preview your thumbnails, so you can see what they will look like in Youtube's styling in both desktop and App view.
              Save your thumbnails so you can easily see the difference between the two.
              Keep all your thumbnail Ideas in one place!
            </p>
          </section>
          <div className="btn-container">
            <button className='create-laconic'>
              Create with Laconic
            </button>

          </div>
          <footer>
            footer( Laconic: Better Thumbnails )
          </footer>
      </div>
      </>
    );
  }
}

export default Landing