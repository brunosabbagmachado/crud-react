import {useState} from 'react';
import { IDados } from 'types/dados';
import Item from './Item';

interface Props {
  dados: IDados[];
}

export default function Lista({dados}: Props) {
  
  return (
    <aside>
      <ul>
        {dados.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}