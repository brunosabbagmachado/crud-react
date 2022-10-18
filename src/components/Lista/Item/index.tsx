import Botao from 'components/Botao';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

export default function Item({ nome, email, date }: { nome: string, email: string, date: string }) {

  const apaga = () => {
    document.getElementById('linha')?.remove();
  };

  return (
    <tr id='linha'>
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