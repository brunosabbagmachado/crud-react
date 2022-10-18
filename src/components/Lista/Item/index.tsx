import Botao from 'components/Botao';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';

export default function Item({ id, nome, email, date, }: { id: string, nome: string, email: string, date: string }) {

  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const apaga = () => {
    document.getElementById(small_id)?.remove();
  };

  return (
    <tr id={small_id}>
      <td>{nome}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>
        <Botao type='button'>
          <FontAwesomeIcon icon={faPencil} />
        </Botao>
      </td>
      <td>
        <Botao type='button' onClick={apaga}>
          <FontAwesomeIcon icon={faTrash} />
        </Botao>
      </td>
    </tr>
  );
}