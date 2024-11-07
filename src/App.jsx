import { useState } from "react";
import Card from "./Components/Card";



function App() {
  const [falloValidaciones, setValidaciones] = useState(false);
  const [submitEnviado, setSubmit] = useState(false);
  const [estudiante, setEstudiante] = useState({
    nombre: "",
    carrera: "",
  });
  const enviar = (event) => {
    event.preventDefault()
    setSubmit(true)
    setValidaciones(false)
    const validarEspacio = /^\s/.test(estudiante.nombre);
    if (estudiante.nombre.length > 3 && !validarEspacio && estudiante.carrera.length >= 6)  {
      setValidaciones(true)
    }
  }
  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form onSubmit={enviar}> 
          <label>Nombre:</label>
          <input
            type="text"
            value={estudiante.nombre}
            onChange={(event) =>
              setEstudiante({ ...estudiante, nombre: event.target.value })
            }
          />
          <label>carrera</label>
          <input
            type="text"
            value={estudiante.carrera}
            onChange={(event) =>
              setEstudiante({ ...estudiante, carrera: event.target.value })
            }
          />
          <button>Enviar</button>
        </form>
        {submitEnviado ? falloValidaciones ? <Card estudiante={estudiante} /> : <h2>Por favor chequea que la información sea correcta</h2>:null}
    </div>
  );
}


export default App;
