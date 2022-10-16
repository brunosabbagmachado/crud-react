import { useState } from 'react';
import Formulario from 'components/Formulario';
import { IDados } from 'types/dados';
import Lista from 'components/Lista';
import style from './Crud.module.scss';

export default function Crud() {

  const [dados, setDados] = useState<IDados[]>([]);

  return (
    <main className={style.conteudo}>
      <Formulario setDados={setDados} />
      <Lista dados={dados} />
    </main>
  );
}