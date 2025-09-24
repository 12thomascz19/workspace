import logo from './logo.svg';
import './App.css';
import Componente from './Componente-1';
import Estudiante from './Estudiantes';

function App() {
  return (
    <div className="App">
      <Componente />
      <Estudiante nombre="Thomas " apellido="Cano"/>
      <Estudiante  nombre="Jaider" apellido="Alvarez"/>
      <Estudiante  nombre="Maidy" apellido="Granada" />
      <Estudiante  nombre="Maria" apellido="Martinez"/>
    </div>
  );
}

export default App;
