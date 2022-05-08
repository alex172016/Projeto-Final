/* eslint-disable import/no-anonymous-default-export */
import "./Compromisso.css";

import img01 from "../../../src/Foto/img/valefoto.jpg";
import img02 from "../../../src/Foto/img/recantocachoeira.jpg";
import img03 from "../../../src/Foto/img/HotelMaldives.jpg";
import img04 from "../../Foto/img/fazenda-campinas.jpg";
import img05 from "../../Foto/img/CostaSauipe.jpg";
import img06f from "../../Foto/img/beachfortaleza.jpg";


const Compromisso = (props) => {
  return (
    <>   
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={img01} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
      
        <h4>Promoção da Semana</h4>
 <p>Hotel Vales da Fazenda: Hospedagem de tres dias, com Café da manhã. R$:1320,00 Reais</p><br/><br/><br/><br/><br/>
   
   
         
        </div>
      </div>
      <div className="carousel-item">
        <img src={img02} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
      
        <h4>Promoção do Dia</h4>
 <p>Hotel Vista Serrana: Hospedagem de tres dias, com Café da manhã. R$:1620,00 Reais</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
         
         
        </div>
      </div>
      <div className="carousel-item">
        <img src={img03} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
      
        <h4>Promoção da Semana</h4>
 <p>Hotel Seneva Jane: Hospedagem de tres dias, com Café da manhã. R$:1420,00 Reais.</p><br/><br/><br/><br/><br/><br/><br/><br/>
        
         
         
        </div>
      </div>
      <div className="carousel-item">
       <img src={img04} className="d-block w-100" alt="..."/>
       <div className="carousel-caption d-none d-md-block">
      
       <h4>Promoção da Semana</h4>
  <p>Resort Tororomba: Hospedagem de tres dias, com Café da manhã. R$:1220,00 Reais</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

       
       
       </div>
     </div>
     <div className="carousel-item">
  <img src={img05} className="d-block w-100" alt="..."/>
  <div className="carousel-caption d-none d-md-block">
      
  <h4>Promoção do Dia</h4>
 <p>Resort Costa Suipe: Hospedagem de tres dias, com Café da manhã. R$:620,00 Reais.</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

  </div>
</div>
     <div className="carousel-item">
       
       <img src={img06f} className="d-block w-100" alt="..."/>
 
 
       <div className="carousel-caption d-none d-md-block">
       <h4>Promoção da Semana</h4>
<p>Resort Beach Fortaleza: Hospedagem de tres dias, com Café da manhã. R$:1220,00 Reais.</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
   
       </div>
     </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

    <div classNameName="tx">
      <br />
      <h2>Nosso Compromisso Com Você</h2>
      <br />
      <br />
      <p>
        A Agencia de Turismo Autoestima é especializada em proporcionar a você e
        sua empresa o melhor em viagens para todo o Brasil e o Exterior. Nossos
        serviços são diferenciados, oferecendo o máximo em qualidade,
        eficiência, conforto, agilidade.
      </p>
      <h4>Eficiência no atendimento</h4>
      <p>
        A Agencia de Turismo Autoestima busca oferecer conexão totalmente
        informatizada com as companhias aéreas e hotéis selecionados para o seu
        maior conforto e agilidade no atendimento.
      </p>
      <h4>Facilitando ao máximo sua viagem</h4>
      <p>
        Locação de veículos e reservas em hotéis no mundo inteiro: a Agencia de
        Turismo Autoestima faz tudo isso e muito mais para que sua comodidade e
        satisfação sejam completas.
      </p>
      <h4>Passagens e documentos</h4>
      <p>
        Agencia de Turismo Autoestima faz reserva e emissão de passagens aéreas
        com a máxima eficiência e fornece ainda a organização completa de toda a
        documentação necessária em suas viagens.
      </p>
      
    </div>
    </>
    
  )
}
export default  Compromisso;

