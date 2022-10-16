import style from './Item.module.scss';

export default function Item({ nome, email, date }: { nome: string, email: string, date: string}) {
  return (
    <tr className={style.tr}>
      <td>{nome}</td>
      <td>{email}</td>
      <td>{date}</td>
    </tr>
  );
}