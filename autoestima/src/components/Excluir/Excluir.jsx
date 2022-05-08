/* eslint-disable import/no-anonymous-default-export */
import "./Excluir.css";
const Excluir = () => {
  return (
    <div className="excluir">
      
      <br />
      <h4 align="center">Excluir Cadastro</h4>
      
      <form className="row g-3">
        <div className="col-auto">
          <label for="cpf" className="visually-hidden">
            CPF
          </label>
          <input
            type="cpf"
            className="form-control"
            id="cpf"
            placeholder="Digite seu CPF"
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Excluir Cliente
          </button>
        </div>
      </form>
    </div>
  );
}
export default Excluir;


