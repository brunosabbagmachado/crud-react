import { useState } from 'react';
import Formulario from 'components/Formulario';
import { IDados } from 'types/dados';
import Lista from 'components/Lista';

export default function Crud() {

  const [dados, setDados] = useState<IDados[]>([]);

  return (
    <>
      <Formulario setDados={setDados} />
      <Lista dados={dados} />
    </>
  );
}