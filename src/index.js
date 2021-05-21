import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './component/css/about.css'
import './component/css/apartment.css'
import './component/css/blog.css'
import './component/css/footer.css'
import './component/css/project.css'
import './component/css/service.css'
import './component/css/styles.css'
import './component/css/responsive(479px).css'
import './component/css/responsive(767px).css'
import './component/css/responsive(991px).css'




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
