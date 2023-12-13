import React from 'react';
import { Link } from 'react-router-dom';

export default function Elipse() {
  return (
    <div className='ListadeElipse'>
      <div className='titulo2'>
        <h1>A BookStore Electronics também oferece</h1>
      </div>
      <div className='elipse'>
        <div className='elipse1'>
          <Link to='/'>
            <img src='./itens/Monitor.png' alt="Monitores" />
            <p>Monitores</p>
          </Link>
        </div>
        <div className='elipse2'>
          <Link to='/'>
            <img src='./itens/Notebook.png' alt="Notebooks" />
            <p>Notebooks</p>
          </Link>
        </div>
        <div className='elipse3'>
          <Link to='/'>
            <img src='./itens/Cadeira.png' alt="Cadeiras"/>
            <p>Cadeiras</p>
          </Link>
        </div>
        <div className='elipse4'>
          <Link to='/'>
            <img src='./itens/Mouse.png' alt="Mouses"/>
            <p>Mouses</p>
          </Link>
        </div>
        <div className='elipse5'>
          <Link to='/'>
            <img src='./itens/Teclado.png' alt="Teclados"/>
            <p>Teclados</p>
          </Link>
        </div>
        <div className='elipse6'>
          <Link to='/'>
            <img src='./itens/Headset.png' alt="Headsets"/>
            <p>Headsets</p>
          </Link>
        </div>
        <div className='elipse7'>
          <Link to='/'>
            <img src='./itens/MousePad.png' alt="Mouse Pads"/>
            <p>Mouse Pads</p>
          </Link>
        </div>
        <div className='elipse8'>
          <Link to='/'>
            <img src='./itens/Suporte.png' alt="Suportes"/>
            <p>Suportes</p>
          </Link>
        </div>
      </div>
    </div>
  );
}