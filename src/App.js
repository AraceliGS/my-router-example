import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';

//Componentes

const PaginaUno = ({
  navigateTo
}) => (
  <div>Primera pagina/Pagina uno aqui<br />
  <a href='#/header'
  onClick={() => navigateTo('header')}
  >Next Page - Header</a>
  </div>
);

const PaginaDos = ({navigateTo}) => (
  <div>Página Dos aquí<br />
    <a href="#/pagina-1"
    onClick={() => navigateTo('page-1')}
    >Ir a página 1</a>
    <br />
    <a href="#/page-1"
    onClick={()=> navigateTo('header')}
    >Ir a header</a>
  </div>
);
// App
const App = ({
  paginaActual, navigateTo
}) => {
  switch (paginaActual) {
    case 'page-1':
      return <PaginaUno 
            navigateTo={navigateTo}
            />
    case 'page-2':
      return <PaginaDos 
             navigateTo={navigateTo}
             />
    case 'header':
      return <Header navigateTo={navigateTo}/>
    default:
      break;
  }
  return null
}

// Container App

const mapStateToProps = ({paginaActual}) => ({
  paginaActual
});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (pagina) => {
    //  Action dentro de ({})
    dispatch({
      type: 'NAVIGATE_TO',
      pagina
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
