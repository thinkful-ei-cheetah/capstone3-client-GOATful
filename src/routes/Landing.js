import React, { Component } from 'react'
import { NavLink, } from 'react-router-dom';

class Landing extends Component {
  componentDidMount() {
      console.log('I was mounted')
  }

  render() {

    return (
      <section>
        <h1>
        Let your thumbnail do the talking.
        </h1> 
        <div>
          <h2>
            With Laconic
          </h2>
        </div>
        <section>
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

        <section>
          <h3>
          WHAT IS A/B TESTING
          </h3>
          <p>
          An “A/B Test” is a test where 2 variants of something (anything) is tested for equal amounts of time, to see which version performs the best.
          In this case, what is being tested and compared is 2 versions of a thumbnail, of your own choosing. By uploading 2 thumbnails into the system, they are changed each day automatically on your channel (for a chosen period), and by the end of the test we automatically gather the data from your YouTube Analytics and see which of the thumbnails resulted in the most views.
          </p>
        </section>

        <section>
          <h3>
            What we do
          </h3>
          <p>
            We Preview your thumbnails, so you can see what they will look like in Youtube's styling in both desktop and App view.
            Save your thumbnails so you can easily see the difference between the two.
            Keep all your thumbnail Ideas in one place!
          </p>
        </section>

      <button>
        Create with Laconic
      </button>

        <footer>
          footer( Laconic: Better Thumbnails )
        </footer>

      </section>
    );
  }
}

export default Landing