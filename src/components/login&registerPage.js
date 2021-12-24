import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { API_URL } from '../api'
import { ToastContainer, toast } from 'react-toastify';
import './Login&RegisterPage.css';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');
function LoginAndRegister(){
const navigate = useNavigate();
 const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});
  const [showRegister, setShowRegister] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setShowRegister(false)
  }
  const handleRegister = () => {
    handleClose()
    setShowRegister(true);

  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleCloseRegister = () => setShowRegister(false)
  const handleSubmit1 = (event) => {
    event.preventDefault();
    let body = {
      email: inputs.email,
      phone: inputs.phone,
      password: inputs.password,
      name: inputs.name
    }
    console.log(body)
    axios.post(API_URL + 'user/registerUser', body).then(res => {

      if (res.data.status === "success") {
        toastDisplay("success", 'User created successfully')
        handleShow()
      }
      else {
        toastDisplay("error", 'User already exist')
      }
    })
  }
  const handleSubmit = (event) => {
    let body = {
      email: inputs.email,
      password: inputs.password
    }
    event.preventDefault();
    axios.post(API_URL + 'user/login', body).then(response => {
      if (response.data.status === 'success') {
        toastDisplay("success", 'User Login successfully')
         setTimeout(()=>{
           navigate("/home");
         },1500)
      }
      else {
        toastDisplay("error", 'invalid Credentials')
      }

    })
  }
  const toastDisplay = (error, message) => {
    if (error === "success") {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    else if (error === "fail", message) {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
}
return (
    <div className="App">

    <nav className="navbar navbar-expand-lg navbar-dark navbar-togglable fixed-top">
      <div className="container">
        <a className="navbar-brand" href="./index.html">
          <img src="https://social.paolibostudio.com/assets/img/logo_verde.png" className="navbar-brand-img" alt="..." />
        </a>
        <div>
          <Button variant="success" className={'btn btn-sm btn-index lift ms-auto'} onClick={handleShow}><span
            className="text-white"> Accedi</span></Button></div>


      </div>
    </nav>
    <section className="overlay overlay-dark overlay-40" data-jarallax data-speed=".8"
      style={{ backgroundImage: 'url(https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/portfolio/portfolio-cover-1.jpg)' }}>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center min-vh-100 py-8 py-md-11">
          <div className="col-12 col-md-8 col-lg-6 mt-auto text-center">
            <div className="img-fluid text-white mb-6">
              <img src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/logo_home.png"
                className="img-fluid" />
            </div>
            <p className="lead text-white">
              Dimagrisci con noi. Per essere più forte e sano.
            </p>
          </div>
          <div className="col-12 mt-auto text-center">
          </div>
        </div>
      </div>
    </section>
    <section className="min-vh-100" id="sectionTwo" data-jarallax data-speed=".8"
      style={{ backgroundImage: 'url(https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/portfolio/8.jpg)' }}>
    </section>
    <section style={{ backgroundColor: '#000000', paddingTop: '70px', paddingBottom: '80px' }}>
      <div className="p-5 text-center container">
        <h1 className="mb-3 h1 text-white mt-5"><strong>Allenamenti <span className="text-success">online</span>, per
          stare in <span className="text-success">forma</span></strong></h1>
        <p className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          sunt vel, voluptas eaque ratione nam provident repellendus saepe
          cum! Minima, laudantium sit. Architecto velit laboriosam ullam
          aspernatur cupiditate doloribus provident. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Laudantium ipsam nihil
          temporibus asperiores at esse aperiam corrupti magnam impedit
          delectus obcaecati, dolorum perferendis unde quia hic nostrum
          nobis, repellendus eligendi.
        </p>
      </div>
    </section>
    <section className="min-vh-100" data-jarallax data-speed=".8"
      style={{ backgroundImage: 'url(https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/portfolio/7.jpg)' }}>
    </section>
    <section style={{ backgroundColor: '#000000', paddingTop: '70px', paddingBottom: '80px' }}>
      <div className="container p-5">
        <div className="row gx-5">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <h3 className="card-title text-white"><strong>Cambia stile di vita con</strong></h3>
            <p className="card-text text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam nec sapien lacinia, semper
              tortor pulvinar, semperjusto.
              Nullam nec accumsan elit. Suspendisse finibusporttitor tellus, eget finibus risus.
              Pellentesque vel mollisquam.
              Aeneanconsequat eros ex, nec congue turpis
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h3 className="card-title text-white"><strong>Cambia stile di vita con</strong></h3>
            <p className="card-text text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam nec sapien lacinia, semper
              tortor pulvinar, semperjusto.
              Nullam nec accumsan elit. Suspendisse finibusporttitor tellus, eget finibus risus.
              Pellentesque vel mollisquam.
              Aeneanconsequat eros ex, nec congue turpis
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h3 className="card-title text-white"><strong>Cambia stile di vita con</strong></h3>
            <p className="card-text text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam nec sapien lacinia, semper
              tortor pulvinar, semperjusto.
              Nullam nec accumsan elit. Suspendisse finibusporttitor tellus, eget finibus risus.
              Pellentesque vel mollisquam.
              Aeneanconsequat eros ex, nec congue turpis
            </p>
          </div>

        </div>
      </div>
    </section>
    <div className="position-relative">
      <div className="shape shape-bottom shape-fluid-x text-light">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" />
        </svg>
      </div>
    </div>
    <section className="pt-7 pt-md-10 bg-light">
      <div className="container py-6 py-md-8 border-top border-bottom border-gray-300">
        <div className="row align-items-center">
          <div className="col-12 col-md">
            <h3 className="mb-1 fw-bold">
              Entra nel mondo del fitness con un clic
            </h3>
            <p className="fs-lg text-muted mb-6 mb-md-0">
              Tanti pacchetti per te e la tua famiglia.
            </p>
          </div>
          <div className="col-12 col-md-5">
            <form>
              <div className="row">
                <div><Button variant="success" className={'btn btn-sm btn-index lift ms-auto'} onClick={handleShow}><span
                  className="text-white"> Accedi o Registrati</span></Button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div style={{ marginTop: '100px' }}></div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label>Enter your Email:

            </label>
            <input
              class="form-control"
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label>Enter your password:

            </label>
            <input
              class="form-control"
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <div className="col-6 text-right">
              <input className="btn btn-primary" type="submit" />
            </div>
          </div>
          <ToastContainer />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          <span className={'text-white'}> Close</span>
        </Button>
        <div><Button variant="success" className={'btn btn-sm btn-index lift ms-auto'} onClick={handleRegister}><span
          className="text-white"> Registrati</span></Button></div>

      </Modal.Footer>
    </Modal>

    <div style={{ marginTop: '100px' }}></div>
    <Modal show={showRegister} onHide={handleCloseRegister}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit1}>
          <div className="mb-3">
            <label>Enter your name: </label>
            <input
              type="text" class="form-control"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Enter your email: </label>
            <input
              class="form-control"
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />

          </div>
          <div className="mb-3">
            <label>Enter your phone: </label>
            <input
              class="form-control"
              type="number"
              name="phone"
              value={inputs.phone || ""}
              onChange={handleChange}
            />

          </div>
          <div className="mb-3">
            <label>Enter your password: </label>
            <input
              class="form-control"
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
            />

          </div>
          <div className="row">
            <div className="col-6 text-right">
              <input className="btn btn-primary" type="submit" />
            </div>
          </div>
          <ToastContainer />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="row">
          <div className="col-6 text-left">
            <Button variant="success" onClick={handleCloseRegister}>
              <span className={'text-white'}> Close</span>
            </Button>
          </div>
          <div className="col-6 text-right">
            <div><Button variant="success" className={'btn btn-sm btn-index lift ms-auto'} onClick={handleShow}><span
              className="text-white"> Accedi</span></Button></div>
          </div>
        </div>
      </Modal.Footer>
    </Modal>

  </div>
)
}
export default LoginAndRegister