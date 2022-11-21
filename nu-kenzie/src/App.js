import { useState } from 'react';
import './App.css';
import { PaginaHome } from './home';
import { PaginaDeInicio } from './index.jsx';

function App() {

  const [pageAtual, setPage] = useState('paginaInicio')

  return  pageAtual === 'paginaInicio' ? <PaginaDeInicio setPagina={ setPage }/> : <PaginaHome setPagina={ setPage }/> ;
}

export default App;
