import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return ( 
      <MDBFooter color="elegant-color" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">#NeverStopLearning</h5>
            <p>
              En este sitio web encontraras los mejores cursos de tecnologias y <br />mas con certificado totalmente gratis.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Categorias</h5>
            <ul>
              <li className="list-unstyled">
                <NavLink to="/categoria/programacion">Programacion</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink to="/categoria/design">Diseño</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink to="/categoria/intelifencia-artificial">Intelifencia Artificial</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink to="/categoria/marketing">Marketing</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink to="/categoria/otros">Otros</NavLink>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Acerca de</h5>
            <ul>
              <li className="list-unstyled">
                <NavLink to="/acerca-de">Proposito</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="list-unstyled">
                <a href="#!">Plataformas de pago</a>
              </li>
              <li className="list-unstyled">
                <NavLink to="/publica-un-curso">Publica un curso</NavLink>
              </li>
            </ul>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} #NeverStopLearning <a href="https://luisbazaldua.com"> luisbazaldua.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
     );
}


 
export default Footer;