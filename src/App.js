import './App.css';
import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import WordlePage from '../Wordle/WordlePage';
// import CrosswordPage from '../CrosswordPage/CrosswordPage';
// import ConnectionsPage from '../ConnectionsPage/ConnectionsPage';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          <Route exact path="/wordle">
            <WordlePage />
          </Route>
          
          {/* <Route exact path="/crossword">
            <CrosswordPage />
          </Route>
          
          <Route exact path="/connections">
            <ConnectionsPage />
          </Route> */}
          
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
