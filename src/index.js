import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//////////////////////////////////////////////////////////////////////////////
// const title = <h2 className="title-js">ALBERTO MEHICANO</h2>;
// const textP = <p id="qwe333">Made in Armenia</p>;
// const div = (
//   <div id="1221" atrr="arter" className="div -js">
//     {title}
//     {textP}
//   </div>
// );

// console.log(div);

// ReactDOM.createRoot(root).render(div);

////////////////////////////////////////////////////////////////////////////

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<App />);

var number = function (busStops) {
  // Good Luck!
};
console.log(
  number(
    [
      [10, 0],
      [3, 5],
      [5, 8],
    ],
    5
  )
);
