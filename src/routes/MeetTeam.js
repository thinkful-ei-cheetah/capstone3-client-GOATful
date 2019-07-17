import React, { Component } from 'react'
import './MeetTeam.css'
import David from '../img/david.jpeg'
import Kp from '../img/KP.jpg'
import Elan from '../img/elan.jpg'
import Verdi from '../img/verdi.JPG'
import Peter from '../img/peter.png'
import goat1 from '../img/goat1.jpg'
import goat2 from '../img/goat2.jpg'
import goat3 from '../img/goat3.jpg'
import goat4 from '../img/goat4.jpg'
import goat5 from '../img/goat5.jpg'

class Team extends Component {
  componentDidMount() {
    console.log('I was mounted')
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <section className='Teamhero'>
          <h1>
            Let your thumbnail do the talking.
        </h1>
          <div>
            <h2 className='red'>
              Meet the Laconic Team
          </h2>
          </div>
        </section>
        <div className='team-container'>
          <section className='david'>
            <figure className='picSwap'>
              <img src={David} alt="David K. Nordeen" />
              <img className='goat' src={goat1} alt="goat" />
            </figure>
            <h3>
              David K. Nordeen
            </h3>
            <p>
              Full stack developer web developer located in Scottsdale, AZ. I graduated from Drake University in 2016 with a Bachelor’s degree in marketing and entrepreneurial management. When i’m not programming, you can find me getting buckets at the local gym or watching a sci fi movie.
            </p>
          </section>

          <section className='elan'>
            <figure className='picSwap'>
              <img src={Elan} alt="Elan Green" />
              <img className='goat' src={goat2} alt="goat" />
            </figure>
            <h3>
              Elan Green
            </h3>
            <p>
              Full stack web developer currently living in Austin, TX. I am a classically trained cellist with 20 years of experience. I believe the intersection of music and technology is extremely powerful, and it is a great dream of mine to someday work for a music-focused tech company!
            </p>
          </section>

          <section className='kp'>
            <figure className='picSwap'>
              <img src={Kp} alt="Kristof-Pierre Cummings" />
              <img className='goat' src={goat3} alt="goat" />
            </figure>
            <h3>
              Kristof-Pierre Cummings
            </h3>
            <p>
              Full stack web developer located near Austin, TX. I love to camp, cook, and crack open a beer- especially in that order. Go Liverpool!
            </p>
          </section>
          <section className='verdi'>
            <figure className='picSwap'>
              <img src={Verdi} alt="Michael Verdi" />
              <img className='goat' src={goat4} alt="goat" />
            </figure>
            <h3>
              Michael Verdi
            </h3>
            <p>
              Full stack developer located in Tampa, FL. I'm a self taught engineer with three years experience in Ruby on Rails development working at both start ups and publicly traded companies.
            </p>
          </section>
          <section className='peter'>
            <figure className='picSwap'>
              <img src={Peter} alt="Peter Pae" />
              <img className='goat' src={goat5} alt="goat" />
            </figure>
            <h3>
              Peter Pae
            </h3>
            <p>
              Full stack developer and data/AI enthusiast from the DMV. I like to make keyboards, listen to music, and I smoke a mean brisket. I stay open minded and always seek new ways to improve my craft.
            </p>
          </section>
        </div>
      </>
    );
  }
}

export default Team