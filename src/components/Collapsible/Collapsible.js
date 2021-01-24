import React from 'react'
import M from "materialize-css";


class Collapsible extends React.Component {
  
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    });
  }
  render(){
    return (
      <ul className="collapsible">
        <li className="active">
          <div className="collapsible-header">First</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div className="collapsible-header">Second</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div className="collapsible-header">Third</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
      </ul>
    );
  }
}

export default Collapsible;