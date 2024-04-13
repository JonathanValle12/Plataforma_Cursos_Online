import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Global } from '../../helpers/Global';
import defaults from '../../assets/img/defaults.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const { auth, isLoading } = useAuth();
    const [showLoginAlert, setShowLoginAlert] = useState(false);
    const [showInstructorAlert, setShowInstructorAlert] = useState(false);
    const [popUp, setPopUp] = useState(false);

    useEffect(() => {
        if (isLoading === false) {
            setShowLoginAlert(false);
            setShowInstructorAlert(false);
        }
    }, [isLoading]);

    const showLoginMessage = () => {
        setShowLoginAlert(true);
    };

    const showInstructorMessage = () => {
        setShowInstructorAlert(true);
    };

    const showPopUp = () => {
        setPopUp(!popUp);
    };

    return (
        <nav className='navegacion'>
            <ul>
                <li className='lista'>
                    <NavLink to='/cursos'>Cursos</NavLink>
                </li>
                {isLoading !== null && (
                    <>
                        {!auth._id ? (
                            <li className='lista'>
                                <span
                                    onMouseEnter={showLoginMessage}
                                    onMouseOut={() => setShowLoginAlert(false)}
                                    className='bloqueado'
                                >
                                    Crear Cursos
                                </span>
                                {showLoginAlert && (
                                    <p className='show-message'>{auth._id ? 'Necesitas ser instructor' : 'Necesitas iniciar sesión'}</p>
                                )}
                            </li>
                        ) : auth.rol === 'estudiante' ? (
                            <li className='lista'>
                                <span
                                    onMouseEnter={showInstructorMessage}
                                    onMouseOut={() => setShowInstructorAlert(false)}
                                    className='bloqueado'
                                >
                                    Crear Cursos
                                </span>
                                {showInstructorAlert && (
                                    <p className='show-message'>{auth._id ? 'Necesitas ser instructor' : 'Necesitas iniciar sesión'}</p>
                                )}
                            </li>
                        ) : (
                            <li className='lista'>
                                <NavLink to='/cursos/crear-cursos'>
                                    <span>Crear Cursos</span>
                                </NavLink>
                            </li>
                        )}
                    </>
                )}
            </ul>
            <ul>
                {auth._id ? (
                    <div onClick={showPopUp}>
                        <li className='lista'>
                            {auth.image === 'default.png' ? (
                                <img src={defaults} alt='Foto de Perfil por defecto' />
                            ) : (
                                <img src={Global.url + 'avatar/' + auth.image} alt='Foto de Perfil del usuario' />
                            )}
                        </li>
                    </div>
                ) : isLoading !== null && (
                    <div>
                        <li className='lista'>
                            <button>
                                <NavLink to='/registro'>Registrarse</NavLink>
                            </button>
                        </li>
                        <li className='lista'>
                            <button>
                                <NavLink to='/login'>Iniciar Sesión</NavLink>
                            </button>
                        </li>
                    </div>
                )}
            </ul>
            {popUp && (
                <div className='modal-user'>
                    <div className='perfil'>
                        <li className='lista'>
                            {auth.image === 'default.png' ? (
                                <img src={defaults} alt='Foto de Perfil por defecto' />
                            ) : (
                                <img src={Global.url + 'avatar/' + auth.image} alt='Foto de Perfil del usuario' />
                            )}
                        </li>
                        <p className='name'>{auth.name}</p>
                    </div>
                    <NavLink to='/cursos/editarPerfil'>
                        <div className='mi-perfil'>
                            <FontAwesomeIcon icon={faUser} className='user' />
                            <p>Mi Perfil</p>
                        </div>
                    </NavLink>
                    <div className='logout'>
                        <NavLink to='/logout'>
                            <button>Cerrar Sesión</button>
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
