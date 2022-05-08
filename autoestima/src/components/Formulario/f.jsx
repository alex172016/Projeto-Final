/* eslint-disable import/no-anonymous-default-export */
const F = () => {
    return (
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputbilhete" className="form-label">Bilhete</label>
          <input type="text" className="form-control" id="inputbilhete" placeholder="Destino" />
        </div>
        <div className="col-md-6">
          <label for="inputNome" className="form-label">Nome</label>
          <input type="text" className="form-control" id="inputNome" placeholder="Alex" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">Preco</label>
          <input type="preco" className="form-control" id="inputPreco" placeholder="Preço"></input>
  
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </form>
    )
  }
  export default F;