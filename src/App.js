import React , {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './protected/PrivateRoute'
import PublicOnlyRoute from './protected/PublicOnlyRoute'


import NavBar from './components/NavBar/NavBar'
import Landing from './routes/Landing'
import AddVid from './routes/AddVideo'
import Creator from './routes/Creator'
import Login from './routes/Login'
import Previews from './routes/Previews'
import Videos from './routes/Videos'
import NotFound from './routes/NotFound'
import './App.css';

require('dotenv').config();


export default class App extends Component {
  state = {
    hasError : null,
  }

  render(){

    const landPage = (props) => {
      return(
        <Landing {...props} />
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

    const addVidPage = (props) => {
      return(
        <AddVid {...props}/>
      )
    }

    const PreviewsPage = () => {
      return(
        <Previews />
      )
    }

    const videosPage = () => {
      return(
        <Videos />
      )
    }

    return(
      <div className="App">
        <NavBar />
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
              path={'/videos'}
              component={videosPage}
            />
            <PrivateRoute
              exact
              path={'/:vid-id/previews'}
              component={PreviewsPage}
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

