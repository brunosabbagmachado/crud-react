export default function Crud() {
    return (
      <main className='conteudo'>

      <div className="principal">
        <form className="adicionar" id="novoItem">
          <input type='text' name='nome' id='nome' placeholder="Digite seu nome" required />
          <input type='email' name='email' id='email' placeholder="Digite seu e-mail" required />
          <input type='date' name='nascimento' id='nascimento' required />
          <input type='submit' value='Adicionar' className='cadastrar' id='cadastrar' />
        </form>
      </div>

      <ul className='lista' id='lista'>
      </ul>

    </main>
    );
}