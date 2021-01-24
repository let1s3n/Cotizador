import React from 'react'

import {
  Link
} from "react-router-dom";

class Form extends React.Component {
  render() {
    const { doc, fecha_nac } = this.props.data
    
    return (
      
      <div className="container container-form">
        {/* {console.log(doc)} */}
        <h6>Datos Personales del titular</h6>
        <div className="row">
          <form className="col s12">

            <div className="row">

              <div className="input-field col s12 input-field-form">



                <input id="dni" type="text" className="validate" value={doc} />
                <label className="active" for="dni">DNI</label>


              </div>

              <div className="input-field col s12 input-field-form">
                <input id="nombres" name="nombres" type="text" className="validate" />
                <label className="active" for="nombres">Nombres</label>
              </div>

              <div className="input-field col s12 input-field-form">
                <input id="apellido_paterno" name="apellido_paterno" type="text" className="validate" />
                <label className="active" htmlFor="apellido_paterno">Apellido Paterno</label>
              </div>

              <div className="input-field col s12 input-field-form">
                <input id="apellido_materno" name="apellido_materno" type="text" className="validate" />
                <label className="active" htmlFor="apellido_materno">Apellido Materno</label>
              </div>

              <div className="input-field col s12 input-field-form">
                <input id="fecha_nac" name="fecha_nac" type="text" className="datepicker validate" value={fecha_nac} />
                <label className="active" htmlFor="fecha_nac">Fecha de nacimiento</label>
              </div>

            </div>


            <div className="row">
              <h6> Género</h6>
              <p>
                <label>
                  <input className="with-gap" name="group1" type="radio" checked />
                  <span>Masculino</span>
                </label>
              </p>
              <p>
                <label>
                  <input className="with-gap" name="group1" type="radio" />
                  <span>Femenino</span>
                </label>
              </p>

            </div>

            <div className="row">
              <h6> ¿A quién vamos a asegurar?</h6>
              <p>
                <label>
                  <input className="with-gap" name="group2" type="radio" checked />
                  <span>Solo a mí</span>
                </label>
              </p>
              <p>
                <label>
                  <input className="with-gap" name="group2" type="radio" />
                  <span>A mí y a mi familia</span>
                </label>
              </p>
            </div>

            <Link to="/planes">
              <button class="waves-effect waves-light btn-large">
                Continuar
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;