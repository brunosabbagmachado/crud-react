import style from './Botao.module.scss';

interface Props {
  type?: 'button' | 'submit' | undefined,
  onClick?: () => void,
  children?: React.ReactNode,
}

export default function Botao({ onClick, type, children}: Props) {

  return (
    <button
      className={style.botao}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}