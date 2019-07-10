import React , {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './protected/PrivateRoute'
import PublicOnlyRoute from './protected/PublicOnlyRoute'

import NavBar from './components/NavBar/NavBar'
import Landing from './routes/Landing'
import AddVid from './routes/AddVideo'
import Creator from './routes/Creator'
import Login from './routes/Login'
import Previews from './routes/Previews/Previews'
import Videos from './routes/Videos'
import NotFound from './routes/NotFound'
import './App.css';
import { withAppContext } from './contexts/AppContext';
import ErrorBar from './components/ErrorBar/ErrorBar'
import Loader from '../src/components/Loader/Loader'

require('dotenv').config();


class App extends Component {
  state = {
    hasError : null,
  }

  renderErrorBar = () => {
    const { appError, clearAppError } = this.props.appContext
    if (appError) return <ErrorBar appError={appError} clearError={clearAppError}/>
    return <></>
  }

  render(){
    const landPage = (props) => {
      return(
        <Landing {...props} />
      )
    }

    const loginPage = (props) => {
      return(
        <Login {...props}/>
      )
    }

    const creatorPage = (props) => {
      return(
        <Creator {...props}/>
      )
    }

    const addVidPage = (props) => {
      return(
        <AddVid {...props}/>
      )
    }

    const PreviewsPage = (props) => {
      return(
        <Previews {...props}/>
      )
    }

    const videosPage = (props) => {
      return(
        <Videos {...props}/>
      )
    }

    return(
      <div className="App">
        <Loader/>
        <NavBar />
        {this.renderErrorBar()}

        <main>
          <Switch>
            <PublicOnlyRoute
              exact path={'/'} component={landPage}
            />
            <Route
              exact path={'/creator'} component={creatorPage}
            />
            <PublicOnlyRoute
              exact path={'/add-video'} component={addVidPage}
            />
            <PublicOnlyRoute
              exact path={'/login'} component={loginPage}
            />
            <PrivateRoute 
              exact path={'/videos'} component={videosPage}
            />
            <PrivateRoute
              exact path={'/videos/:video_id/previews'} component={PreviewsPage}
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

export default withAppContext(App);