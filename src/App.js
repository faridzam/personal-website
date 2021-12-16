import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {Main, About} from './pages'
import {Header} from './components'
import './styles/index.css'
import './styles/banner.css'
import './styles/main-content.css'
import './styles/footer.css'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/">
                <Main/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;