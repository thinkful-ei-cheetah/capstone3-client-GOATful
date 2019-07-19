import React, { Component } from 'react'
import './LandingPage.css'
import './laconic-bg-2.jpg'
import './dark-hero-bg.png'
import './aside-bg.png'
import DemoOnTable from './demo-bg.png'

class Landing extends Component {
  pushToLogin = () => {
    this.props.history.push('/login')
  }
  render() {
    return (
      <>
      <main className="landing-page-container">
        <section className='hero page'>
          <div className='hero-content'>
            <h2>Youtube Creators</h2>
            <h3>Ready to 10x your view counts?</h3>

            <p>Laconic is the only tool that helps you optimize the look and feel of your video thumbnails before you post to YouTube.</p>
            <button onClick={this.pushToLogin} className='create-laconic'>
              Create with Laconic
            </button>
          </div>
        </section>
        <section className='about'>
          <div className='left'>
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
          </div>
          <div className='right'>
            <img src={DemoOnTable} alt='Laconic on mac'/>
          </div>
        </section>
        
        <aside>
          <div className='quote'>
            Since using Laconic my total views and subscriptions have sky rocketed!
          </div>
        </aside>
        
      </main>
      </>
    );
  }
}

export default Landing