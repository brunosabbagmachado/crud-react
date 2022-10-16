import { IDados } from 'types/dados';
import Item from './Item';
import style from  './Lista.module.scss';

interface Props {
  dados: IDados[];
}

export default function Lista({dados}: Props) {
  
  return (
    <div>
      <table className={style.tabela}>
        {dados.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </table>
    </div>
  );
}