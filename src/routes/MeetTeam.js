import React, { Component } from 'react'
import './MeetTeam.css'
import David from '../img/david.jpeg'
import Kp from '../img/KP.jpg'
import Elan from '../img/elan.jpg'
import Verdi from '../img/verdi.jpg'

class Team extends Component {
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
              Meet the Laconic Team
          </h2>
          </div>
        </section>
        <div className='landing-container'>
          <section className='david'>
            <figure>
              <img src={David}  alt="David K. Nordeen"/>
            </figure>
            <h3>
              David K. Nordeen
            </h3>
            <p>
            Fullstack developer located in Scottsdale, Arizona. I graduated from Drake University in 2016 with a Bachelor’s degree in marketing and entrepreneurial management.  
            </p>
          </section>

          <section className='elan'>
            <figure>
              <img src={Elan} alt="Elan Green" />
            </figure>
            <h3>
              Elan Green
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section className='kp'>
            <figure>
              <img src={Kp} alt="Kristof-Pierre Cummings"/>
            </figure>
            <h3>
              Kristof-Pierre Cummings
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <section className='verdi'>
            <figure>
              <img src={Verdi} alt="Michael Verdi" />
            </figure>
            <h3>
              Michael Verdi
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </section>
          <section className='peter'>
            <figure>
              <img src="https://res.cloudinary.com/goatful/image/upload/v1562870755/prof_sygtha.png" alt="Peter Pae" />
            </figure>
            <h3>
              Peter Pae
            </h3>
            <p>
            Fullstack developer and data/AI enthusiast from the DMV. I like to make keyboards, listen to music, and I smoke a mean brisket. I stay open minded and always seek new ways to improve my craft.
            </p>
          </section>
          <footer>
            footer( Laconic: Better Thumbnails )
          </footer>
        </div>
      </>
    );
  }
}

export default Team