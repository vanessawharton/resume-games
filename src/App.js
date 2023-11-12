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
import WordPage from './Word/WordPage';
// import CrosswordPage from '../CrosswordPage/CrosswordPage';
// import ConnectionsPage from '../ConnectionsPage/ConnectionsPage';

function App() {

  return (
      <div>
        <WordPage />
      </div>
  );
}

export default App;
