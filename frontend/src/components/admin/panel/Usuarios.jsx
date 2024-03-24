import React, { useEffect, useState } from 'react'
import Header from './Header'
import '../../../assets/css/admin/usuarios/usuariosRol.css';
import { Global } from '../../../helpers/Global';
import defaults from '../../../assets/img/defaults.png';

const Usuarios = () => {

  const [datos, setDatos] = useState({});
  const [mostrarEstudiantes, setMostrarEstudiantes] = useState(true);
  const [mostrarInstructores, setMostrarInstructores] = useState(false);

  useEffect(() => {
    obtenerUsuario();
  }, []);

  const obtenerUsuario = async () => {

    const request = await fetch(Global.urlAdmin + "list-usuarios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      }
    })

    const data = await request.json();

    setDatos(data);
  }

  const showEstudiantes = () => {
    setMostrarEstudiantes(true);
    setMostrarInstructores(false);
  }

  const showInstructores = () => {
    setMostrarEstudiantes(false);
    setMostrarInstructores(true);
  }
  return (
    <div>
      <Header />
      <div className='usuariosRol'>
        <div className='rol'>
          <p onClick={showEstudiantes}>Estudiante</p>
          <p onClick={showInstructores}>Instructor</p>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nombre de Usuario</th>
              <th>Correo</th>
              <th>Rol</th>
            </tr>
          </thead>

          {mostrarEstudiantes &&
            <tbody>
              {datos.estudiantes && datos.estudiantes.map((usuario) => (
                <tr key={usuario._id}>
                  <td>
                    {usuario.image === "default.png" ?
                      <img src={defaults} />
                      : <img src={Global.url + "avatar/" + usuario.image} />}
                  </td>
                  <td>{usuario.name}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.rol}</td>
                </tr>
              ))}
            </tbody>
          }

          {mostrarInstructores &&
            <tbody>
              {datos.instructores && datos.instructores.map((usuario) => (
                <tr key={usuario._id}>
                  <td>
                    <div className="user">
                    {usuario.image === "default.png" ?
                      <img src={defaults} />
                      : <img src={Global.url + "avatar/" + usuario.image} />}

                      {usuario.name}
                      </div>
                  </td>
                  <td>{usuario.email}</td>
                  <td>{usuario.rol}</td>
                </tr>
              ))}

            </tbody>
          }
        </table>
      </div>
    </div>
  )
}

export default Usuarios