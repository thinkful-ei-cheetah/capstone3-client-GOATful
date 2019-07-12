import React, { Component } from 'react'
import './MeetTeam.css'
import David from '../img/david.jpeg'
import Kp from '../img/KP.jpg'
import Elan from '../img/elan.jpg'

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
              <img src={David} alt="David K. Nordeen"/>
            </figure>
            <h3>
              David K. Nordeen
            </h3>
            <p>
            Chief Marketing Officer, NBA Addict, GOAT  
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
            Yeet 
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
            Nerd, Massive Manchester City Fan
            </p>
          </section>
          <section className='verdi'>
            <figure>
              <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_10/f_auto,q_auto,w_1100/v1555172614/shape/mentalfloss/iStock-177369626_1.jpg" alt="Michael Verdi" />
            </figure>
            <h3>
              Michael Verdi
            </h3>
            <p>
            yo 
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
            Meme Lord  
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