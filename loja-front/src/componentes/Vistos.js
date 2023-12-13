import React from 'react';
import { Link } from 'react-router-dom';
import ListaDeProdutos from './ListaDeProdutos';

export default function Body() {
  const produtos = [
    {
      id: 1,
      nome: 'Notebook Gamer Acer Nitro 5 intel Core I7 -11800H, 16GB RAM, NVIDI...',
      foto: './itens/gaming3i.png',
      valorAntigo:  4042.09,
      valor: 3849.99
    },
    {
      id: 2,
      nome: 'Teclado Mecânico Gamer HyperX Alloy MKW100, RGB, Switch Red...',
      foto: './itens/teclado2.png',
      valorAntigo: 600.10,
      valor:  239.99
    },
    {
      id: 3,
      nome: 'Moniitor Gamer LG 21.5 LED Full HD 75Hz, 5ms, HDMI, FreeSync - 22M...',
      foto: './itens/monitor2.png',
      valorAntigo: 888.88,
      valor:  479.99
    },
    {
      id: 4,
      nome: 'Headset Gamer JBL Quantum 100, Drivers 50mm, Preto - 2813177',
      foto: './itens/headset2.png',
      valorAntigo: 352.93,
      valor:  219.99
    },
  ];
  
  return (
        
        <div className='ListaDeVistos'>
            <div className='titulo4'>
                <h1>Mais vistos</h1>
            </div>
            <ListaDeProdutos produtos={produtos} />
         </div>
  );
}