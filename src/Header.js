import React from 'react';

const Header = ({navigateTo}) => (
  <div>
    <header>
     <h1>Hola, soy el header de tu página</h1>
    </header>
    <br />
    <a href="#/pagina-2"
    onClick={() => navigateTo('page-2')}
    >Ir a página 2</a>
  </div>
) 

export default Header;