import './Estudiantes.css';

function Estudiante({nombre, apellido}) {
    return (
        <div className="Estudiante">
            <div className='nombre'>
                <p>{nombre} </p>
            </div>
            <div className='apellido'>
                <p>{apellido}</p>
            </div>
        </div>
    );
}

export default Estudiante;