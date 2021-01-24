import React from 'react'
import Login from './Login/Login'
import LeftImage from './LeftImage/LeftImage'
import LeftImage1 from './LeftImage1/LeftImage1'
import Form from './Form/Form'
import Collapsible from './Collapsible/Collapsible'
/* import 'materialize-css/dist/css/materialize.min.css' */
import 'materialize-css/sass/materialize.scss'
import '../index.scss'
import M from 'materialize-css/dist/js/materialize.js'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      doc: '',
      fecha_nac: '',
      celular: ''
    }
  }

  componeneDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      M.AutoInit();
    
    });
  }
  handleLoginChange = (name, value) => {
    this.setState({
      [name]: value
    });

  }

  render() {

    return (
      <div className="container">
        <div className="row asdbl">

          <Router>

            <Switch>

              <Route exact path="/" >
                <LeftImage />

              </Route>

              <Route exact path="/login-check">

                <LeftImage1 />

              </Route>


            </Switch>

          </Router>




          <div className="col s5 asdb">

            <Router>

              <Switch>

                <Route exact path="/" >
                  <Login handleLoginChange={this.handleLoginChange} />


                </Route>

                <Route exact path="/login-check">
                  <Form data={this.state} />



                </Route>

                <Route exact path="/planes">
                  <Collapsible />



                </Route>


              </Switch>

            </Router>


          </div>


        </div>
        
      </div>

    );
  }
}

export default App;