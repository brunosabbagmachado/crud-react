import { IDados } from 'types/dados';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  dados: IDados[];
}

export default function Lista({ dados }: Props) {

  return (
    <table className={style.tabela}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Data de Nascimento</th>
          <th>Ediar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </tbody>
    </table>
  );
}