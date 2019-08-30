import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './App';
import './style.css'




ReactDOM.render(
  <Countdown
timeTillDate="05 26 2019, 6:00 am"
timeFormat="MM DD YYYY, h:mm a"
  />, document.getElementById('root'));
