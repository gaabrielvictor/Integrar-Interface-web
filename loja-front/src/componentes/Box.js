import React from 'react';
import { Link } from 'react-router-dom';

export default function Box() {
  return (
    <div className='ListadeBox'>
      <div className='titulo3'>
        <h1>Navegue por Marcas</h1>
      </div>
      <div className="container">
        <div className="box">
          <div className="image-wrapper">
            <img className="image" src="./itens/Logitech.png" alt="Placeholder" />
          </div>
        </div>
        <div className="box2">
          <div className="image-wrapper">
            <img className="image" src="./itens/Acer.png" alt="Placeholder" />
          </div>
        </div>
        <div className="box3">
          <div className="image-wrapper">
            <img className="image" src="./itens/Jbl.png" alt="Placeholder" />
          </div>
        </div>
        <div className="box4">
          <div className="image-wrapper">
            <img className="image" src="./itens/HyperX.png" alt="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
}