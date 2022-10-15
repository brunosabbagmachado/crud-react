export default function Item({ nome, email }: { nome: string, email: string }) {
  return (
    <li>
      <p>{nome}</p>
      <p>{email}</p>
    </li>
  );
}