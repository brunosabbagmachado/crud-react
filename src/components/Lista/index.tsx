import React, { useState } from 'react';
import { IDados } from 'types/dados';
import Item from './Item';
import style from './Lista.module.scss';
import data from 'mock-data.json';
import Botao from 'components/Botao';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

interface Props {
  dados: IDados[];
}

export default function Lista({ dados }: Props) {

  const [contacts, setContatcs] = useState(data);

  const apaga = () => {
    document.getElementById('linha')?.remove();
  };

  return (
    <section>
      <table className={style.tabela}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr id={`linha${contact.id}`} key={index}>
              <td>{contact.nome}</td>
              <td>{contact.email}</td>
              <td>{contact.date}</td>
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
          ))}

          {dados.map((item, index) => (
            <Item
              key={index}
              {...item}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}