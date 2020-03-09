import React from 'react';
import './App.css';
import Claro from './containers/Claro';
import { withRouter } from 'react-router-dom';
import BaseRouter from './routes';
import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <Claro>
        <BaseRouter />
      </Claro>
    </div>
  );
}

export default withRouter(App);
