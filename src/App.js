import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './protected/PrivateRoute'
import PublicOnlyRoute from './protected/PublicOnlyRoute'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './routes/LandingPage/LandingPage'
import TeamPage from './routes/MeetTeamPage/MeetTeamPage'
import AddVidPage from './routes/AddVideoPage/AddVideoPage'
import CreatorPage from './routes/CreatorPage/CreatorPage'
import LoginPage from './routes/LoginPage/LoginPage'
import PreviewsPage from './routes/PreviewsPage/PreviewsPage'
import VideosPage from './routes/VideosPage/VideosPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import './App.css';
import { withAppContext } from './contexts/AppContext'
import ErrorBar from './components/ErrorBar/ErrorBar'
import Loader from '../src/components/Loader/Loader'

require('dotenv').config();


class App extends Component {
  state = {
    hasError: null,
  }

  renderErrorBar = () => {
    const { appError, clearAppError } = this.props.appContext
    if (appError) return <ErrorBar appError={appError} clearError={clearAppError} />
    return <></>
  }

  render() {
    return (
      <div className="App">
        <Loader />
        <NavBar />
        {this.renderErrorBar()}

        <main>
          <Switch>
            <PublicOnlyRoute
              exact path={'/'} component={LandingPage}
            />
            <Route
              exact path={'/creator'} component={CreatorPage}
            />
            <Route
              exact path={'/Team'} component={TeamPage}
            />
            <PublicOnlyRoute
              exact path={'/add-video'} component={AddVidPage}
            />
            <PublicOnlyRoute
              exact path={'/login'} component={LoginPage}
            />
            <PrivateRoute
              exact path={'/videos'} component={VideosPage}
            />
            <PrivateRoute
              exact path={'/videos/:video_id/previews'} component={PreviewsPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default withAppContext(App);