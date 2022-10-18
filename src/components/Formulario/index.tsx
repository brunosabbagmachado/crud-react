import { useState } from 'react';
import Botao from 'components/Botao';
import { IDados } from 'types/dados';
import style from './Formulario.module.scss';

interface Props {
  setDados: React.Dispatch<React.SetStateAction<IDados[]>>
}

export default function Formulario({ setDados }: Props) {


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split(',')[0]);

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    setDados(dadosAntigos => [...dadosAntigos, { nome, email, date }]);

    setNome('');
    setEmail('');
    setDate('');
  }

  return (
    <section>
      <div className={style.principal}>
        <form className={style.formulario} id='novoItem' onSubmit={adicionarTarefa}>
          <div>
            <label htmlFor='nome'>Nome</label>
            <input
              type='nome'
              name='nome'
              id='nome'
              value={nome}
              onChange={evento => setNome(evento.target.value)}
              placeholder='Digite seu nome'
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={evento => setEmail(evento.target.value)}
              placeholder='Digite seu email'
              required
            />
          </div>
          <div>
            <label htmlFor='date'>Data de Nascimento</label>
            <input
              type='date'
              name='date'
              id='date'
              value={date}
              onChange={evento => setDate(evento.target.value)}
              placeholder='dd/mm/yyyy'
              required
            />
          </div>

          <Botao
            type='submit'
          >
            Adicionar
          </Botao>
        </form>
      </div>
    </section>
  );
}