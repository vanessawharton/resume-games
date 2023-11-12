import './App.css';
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import WordlePage from './Wordle/WordlePage';
// import CrosswordPage from '../CrosswordPage/CrosswordPage';
// import ConnectionsPage from '../ConnectionsPage/ConnectionsPage';

function App() {

  return (
    <Router>
      <div>
        {/* <Header /> */}
        Hello!
        <Routes>

          <Route exact path="/wordle" element={<WordlePage />} />
          
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
