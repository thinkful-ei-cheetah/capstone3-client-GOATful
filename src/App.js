import React , {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import PrivateRoute from './protected/PrivateRoute'
import PublicOnlyRoute from './protected/PublicOnlyRoute'

import Landing from './routes/Landing'
import AddVid from './routes/AddVideo'
import Creator from './routes/Creator'
import Login from './routes/Login'
import VidPrev from './routes/VidPreview'
import Videos from './routes/Videos'
import NotFound from './routes/Oops'
import './App.css';


export default class App extends Component {
  state = {
    hasError : null,
  }

  render(){

    const landPage = () => {
      return(
        <Landing />
      )
    }

    const loginPage = () => {
      return(
        <Login />
      )
    }

    const creatorPage = () => {
      return(
        <Creator />
      )
    }

    const addVidPage = () => {
      return(
        <AddVid />
      )
    }

    const vidPrevPage = () => {
      return(
        <VidPrev />
      )
    }

    const videosPage = () => {
      return(
        <Videos />
      )
    }

    return(
      <div className="App">
        <div>
          this is the navBar
        </div>
        <main>
          <Switch>
            <PublicOnlyRoute
              exact
              path={'/'}
              component={landPage}
            />
            <Route
              exact
              path={'/creator'}
              component={creatorPage}
            />
            <PublicOnlyRoute
              exact
              path={'/add-video'}
              component={addVidPage}
            />
            <PublicOnlyRoute
              exact
              path={'/login'}
              component={loginPage}
            />
            <PrivateRoute 
              exact
              path={'/'}
              component={videosPage}
            />
            <PrivateRoute
              exact
              path={'/:vid-id/previews'}
              component={vidPrevPage}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

