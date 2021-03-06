import React, {Component} from 'react'

const AppContext = React.createContext({
  appError: null,
  isLoading: false,
  setLoading: () => {},
  setAppError: () => {},
  clearAppError: () => {}
});
export default AppContext

export class AppProvider extends Component {
  state = {
    isLoading: false,
    appError: null,
    setLoading: this.setLoading.bind(this),
    setAppError: this.setAppError.bind(this),
    clearAppError: this.clearAppError.bind(this)
  }

  setLoading(bool) {
    this.setState({isLoading: bool})
  }

  setAppError(appError) {
    this.setState({appError})
  }

  clearAppError() {
    this.setState({appError: null})
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const withAppContext = Component => (
  props => (
    <AppContext.Consumer>
      {context => <Component appContext={context} {...props} />}
    </AppContext.Consumer>
  )
)