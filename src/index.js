import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data';
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

const cardProduct = data.map(product => (
  <div key={product.id} className="card" style={{ width: '18rem' }}>
    <img src={product.images} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <a href="_" className="btn btn-primary">
        {product.price}
      </a>
    </div>
  </div>
));

console.log(cardProduct);
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(cardProduct);
