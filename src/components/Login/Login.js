import React from 'react'
import M from 'materialize-css'

import {
  Link
} from "react-router-dom";

class Login extends React.Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.handleLoginChange(name, value);
  }


  render() {
    return (
      <div className="container container-form">
        <h6>Ingresa los datos para comenzar</h6>
        <div className="row">
          <form className="col s12">
            <div className="row">

              <div className="input-field col s12 input-field-form">



                <input id="doc" name="doc" type="text" className="validate" onChange={this.handleChange} />
                <label className="active" htmlFor="doc">DNI</label>


              </div>

              <div className="input-field col s12 input-field-form">
                <input id="fecha_nac" name="fecha_nac" type="text" className="validate" onChange={this.handleChange} />
                <label className="active" htmlFor="fecha_nac">Fecha</label>
              </div>

              <div className="input-field col s12 input-field-form">
                <input id="celular" name="celular" type="text" className="validate" onChange={this.handleChange} />
                <label className="active" htmlFor="celular">Celular</label>
              </div>


            </div>

            <p>
              <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span>Acepto la <u>Política de Protección de Datos Personales y los terminos y condiciones</u></span>
              </label>
            </p>

            <p>
              <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span>Acepto la <u>Política de Envío de Comunicaciones Comerciales</u></span>
              </label>
            </p>

            <Link to="/login-check">
              <a class="waves-effect waves-light btn-large">
                Comencemos
              </a>
            </Link>


          </form>
        </div>


      </div>

    );
  }
}

export default Login;