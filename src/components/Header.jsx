import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ProfileModal from "./ProfileModal";

class Header extends Component {
    state={
        showProfile: false
    }
  render() {
    return (
        <>
      <header className="sticky-top">
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container className="container-fluid">
            <Navbar.Brand href="#home">
              <img
                src="./assets/images/netflix_logo.png"
                alt="neflix_logo"
                width="100px"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="text-light">
                  Home
                </Nav.Link>
                <Nav.Link href="#tvshow" className="text-light">
                  Tv Show
                </Nav.Link>
                <Nav.Link href="#movies" className="text-light">
                  Movies
                </Nav.Link>
                <Nav.Link href="#added" className="text-light">
                  Recently Added
                </Nav.Link>
                <Nav.Link href="#list" className="text-light">
                  My list
                </Nav.Link>
              </Nav>
              <Nav>
              <div className="d-flex">
                  <i className="bi bi-search right-icons" />
                  <p className="text-light fw-bold m-0 align-self-center">KIDS</p>
                  <i className="bi bi-bell-fill right-icons" />
                  <a href="#fake" onClick={()=>{this.setState({showProfile:true})}}>
                    <img
                      src="./assets/images/avatar.png"
                      alt="profile_avatar"
                      width="30px"
                      height="30px"
                      className="right-icons"
                    />
                  </a>
                  <i className="bi bi-caret-down-fill right-icons" />
              </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
        <ProfileModal show={this.state.showProfile} closeModal={() => {this.setState({showProfile:false})}}/>
        </>
    );
  }
}

export default Header;
