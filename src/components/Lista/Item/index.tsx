export default function Item({ nome, email, date }: { nome: string, email: string, date: string }) {

  const apaga = () => document.getElementById('linha')?.remove();

  return (
    <tr id="linha">
      <td>{nome}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td><button>Editar</button></td>
      <td><button onClick={apaga}>Excluir</button></td>
    </tr>
  );
}