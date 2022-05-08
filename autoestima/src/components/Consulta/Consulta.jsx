/* eslint-disable import/no-anonymous-default-export */
import "./Consulta.css";
const Consulta = () => {
  return (
    <div className="form">
      <br />
      <h4 align="center">Consulta Cadastro</h4>
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
            Consultar Cadastro
          </button>
        </div>
      </form>
    </div>
  );
}
export default Consulta;

