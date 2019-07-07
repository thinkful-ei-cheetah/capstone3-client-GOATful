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
              Meet the Laconic Team
          </h2>
          </div>
        </section>
        <div className='landing-container'>
          <section className='click-through'>
            <figure>
              <img src="https://media.licdn.com/dms/image/C5103AQEIiVj4du7bpA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=U6TqAzgGvtL5TGHebfAwrywPbYb1nsGjea_A8_od3YM" alt="Click through rate"
                onMouseOver={e => (e.currentTarget.src = 'https://amp.businessinsider.com/images/5c48c7ea2bdd7f581f7508a0-750-375.jpg')}
                onMouseOut={e => (e.currentTarget.src = 'https://media.licdn.com/dms/image/C5103AQEIiVj4du7bpA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=U6TqAzgGvtL5TGHebfAwrywPbYb1nsGjea_A8_od3YM')} />
            </figure>
            <h3>
              David K. Nordeen
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </section>

          <section className='click-through'>
            <figure>
              <img src="https://media.licdn.com/dms/image/C5103AQEIiVj4du7bpA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=U6TqAzgGvtL5TGHebfAwrywPbYb1nsGjea_A8_od3YM" alt="Click through rate"
                onMouseOver={e => (e.currentTarget.src = 'https://amp.businessinsider.com/images/5c48c7ea2bdd7f581f7508a0-750-375.jpg')}
                onMouseOut={e => (e.currentTarget.src = 'https://media.licdn.com/dms/image/C5103AQEIiVj4du7bpA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=U6TqAzgGvtL5TGHebfAwrywPbYb1nsGjea_A8_od3YM')} />
            </figure>
            <h3>
              Elan Green
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </section>

          <section className='click-through'>
            <figure>
              <img src="https://media.licdn.com/dms/image/C5103AQEIiVj4du7bpA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=U6TqAzgGvtL5TGHebfAwrywPbYb1nsGjea_A8_od3YM" alt="Click through rate"
                onMouseOver={e => (e.currentTarget.src = 'https://amp.businessinsider.com/images/5c48c7ea2bdd7f581f7508a0-750-375.jpg')}
                onMouseOut={e => (e.currentTarget.src = 'https://media.licdn.com/dms/image/C5103AQEIiVj4du7bpA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=U6TqAzgGvtL5TGHebfAwrywPbYb1nsGjea_A8_od3YM')} />
            </figure>
            <h3>
              Kristof-Pierre Cummings
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </section>
          <section className='click-through'>
            <figure>
              <img src="https://media.licdn.com/dms/image/C5103AQEIiVj4du7bpA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=U6TqAzgGvtL5TGHebfAwrywPbYb1nsGjea_A8_od3YM" alt="Click through rate"
                onMouseOver={e => (e.currentTarget.src = 'https://amp.businessinsider.com/images/5c48c7ea2bdd7f581f7508a0-750-375.jpg')}
                onMouseOut={e => (e.currentTarget.src = 'https://media.licdn.com/dms/image/C5103AQEIiVj4du7bpA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=U6TqAzgGvtL5TGHebfAwrywPbYb1nsGjea_A8_od3YM')} />
            </figure>
            <h3>
              Michael Verdi
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </section>
          <section className='click-through'>
            <figure>
              <img src="https://media.licdn.com/dms/image/C5103AQEIiVj4du7bpA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=U6TqAzgGvtL5TGHebfAwrywPbYb1nsGjea_A8_od3YM" alt="Click through rate"
                onMouseOver={e => (e.currentTarget.src = 'https://amp.businessinsider.com/images/5c48c7ea2bdd7f581f7508a0-750-375.jpg')}
                onMouseOut={e => (e.currentTarget.src = 'https://media.licdn.com/dms/image/C5103AQEIiVj4du7bpA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=U6TqAzgGvtL5TGHebfAwrywPbYb1nsGjea_A8_od3YM')} />
            </figure>
            <h3>
              Peter Pae
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </section>
          <footer>
            footer( Laconic: Better Thumbnails )
          </footer>
        </div>
      </>
    );
  }
}

export default Landing