import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {Main, About, GetInTouch} from './pages'
import {Header} from './components'
import './styles/index.css'
import './styles/banner.css'
import './styles/main-content.css'
import './styles/footer.css'
import './styles/about.css'
import './styles/get-in-touch.css'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/personal-website">
                <Main/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/get-in-touch">
                <GetInTouch/>
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;