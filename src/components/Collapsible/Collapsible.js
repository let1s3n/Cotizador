import React from 'react'

const Item1 = () => {
  return <h1>1</h1>
}
const Item2 = () => {
  return <h1>2</h1>
}
const Item3 = () => {

  return <h1>3</h1>
}
const Item4 = () => {
  return <h1>4</h1>
}


const Check = () => {
  document.addEventListener('DOMContentLoaded', function () {

    const inputs = document.getElementById('inputs');
    console.log(inputs);
    for (const x of inputs) {
      if (x.checked == true) {
        switch (x.id) {
          case 'basico':
            return <Item1/>;

          case 'avanzado':
            return <Item2/>;

          case 'premium':
            return <Item3/>;

          case 'full':
            return <Item4/>;

        }
      }
    }

  });
}


const Collapsible = () => {






  return (
    <div className="container">
      <form id="inputs">
        <p>
          <label htmlFor="basico">
            <input id="basico" name="group1" type="radio" />
            <span>Básico</span>
          </label>
        </p>
        <p>
          <label htmlFor="avanzado">
            <input id="avanzado" name="group1" type="radio" />
            <span>Avanzado</span>
          </label>
        </p>
        <p>
          <label htmlFor="premium">
            <input id="premium" name="group1" type="radio" />
            <span>Premium</span>
          </label>
        </p>
        <p>
          <label htmlFor="full">
            <input id="full" name="group1" type="radio" />
            <span>Full</span>
          </label>
        </p>
      </form>


      <Check />



    </div>
  );
  }
export default Collapsible;