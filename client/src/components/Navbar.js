import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap'; 
import '@fortawesome/fontawesome-free/css/all.min.css';// Asegúrate de tener react-bootstrap instalado

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemsCount] = useState(3);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register data:', registerData);
    setIsLoggedIn(true);
    setShowRegister(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse navbar-container" id="navbarNav">
            <ul className="navbar-nav main-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/about">Sobre nosotros</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/locations">Ubicaciones</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/contact">Contacto</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/policies">Políticas</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto auth-nav">
              {isLoggedIn ? (
                <>
                  <li className="nav-item cart-icon">
                    <Link className="nav-link" to="/cart">
                      <i className="fas fa-shopping-cart" style={{ color: '#333333 !important' }}></i>
                      {cartItemsCount > 0 && (
                        <span className="cart-count">{cartItemsCount}</span>
                      )}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      <i className="fas fa-user-circle mr-1"></i> Mi Cuenta
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-danger" onClick={() => setIsLoggedIn(false)}>
                      Cerrar Sesión
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={() => setShowLogin(true)}>
                      <i className="fas fa-sign-in-alt mr-1"></i> Iniciar Sesión
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Button variant="primary" onClick={() => setShowRegister(true)}>
                      Registrarse
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal de Login */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Ingresar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p className="text-center w-100">
            ¿No tienes cuenta?{' '}
            <Button variant="link" onClick={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}>
              Regístrate aquí
            </Button>
          </p>
        </Modal.Footer>
      </Modal>

      {/* Modal de Registro */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Crear Cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRegisterSubmit}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    value={registerData.firstname}
                    onChange={handleRegisterChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    value={registerData.lastname}
                    onChange={handleRegisterChange}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono (10 dígitos)</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={registerData.phone}
                onChange={handleRegisterChange}
                pattern="[0-9]{10}"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña (mínimo 5 caracteres)</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                minLength="5"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Registrarse
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p className="text-center w-100">
            ¿Ya tienes cuenta?{' '}
            <Button variant="link" onClick={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}>
              Inicia sesión aquí
            </Button>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navbar;
