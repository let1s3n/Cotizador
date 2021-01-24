import mobile from './img/icons/mobile.png'
import shield from './img/icons/shield.png'
import img1 from '../Login/img1.png'

const LeftImage = () => {
  return (
    <div className="col s7 asdr">
      <div className="img-container">
        <div className="img-bg">
          <img src={img1} className="sub-img" alt="decoracion-login"/>
          <div className="container img-text-container">
            <h3>
              Seguro de <strong>Salud</strong>
            </h3>

            <ul className="collection custom-collection">
              <li className="collection-item custom-collection-item">
                <img src={shield} alt="shield-icon" className="circle" width="15px" height="15px" />
                    Cómpralo de manera facil y rapida
                </li>

              <li className="collection-item custom-collection-item">
                <img src={mobile} alt="mobile-icon" className="circle" width="15px" height="15px" />
                  Cotiza y compra tu seguro 100% digital
                </li>

              <li className="collection-item custom-collection-item">
                <img src={shield} alt="shield-icon" className="circle" width="15px" height="15px" />
                    Hasta 12 millones de cobertura anual
                </li>

              <li className="collection-item custom-collection-item">
                <img src={shield} alt="shield-icon" className="circle" width="15px" height="15px" />
                    Más de 300 clínicas en todo el Perú
                </li>

            </ul>

            <footer className="leftSide-footer">
           © 2021 ;y Company
            
          </footer>
          </div>

          
        </div>
      </div>



    </div>
  );
}

export default LeftImage;