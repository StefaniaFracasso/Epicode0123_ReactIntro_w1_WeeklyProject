import Modal from "react-bootstrap/Modal";
import { Component } from "react";

class ProfileModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.closeModal} className="modal-xl">
        <Modal.Header closeButton className="modalStyle">
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 modalStyle">
        <div className="container bg-dark pt-2">
            <div className="row bg-dark mx-auto">
              <div className="col-12 col-md-6 col-lg-6 offset-md-2 offset-lg-3">
                <div className="row">
                  <div className="col-12 col-md-4 ps-2">
                    <img
                      src="./assets/images/logo_epicode.png"
                      alt="avatar"
                      width="150px"
                      className="rounded img-fluid"
                    />
                  </div>
                  <div className="col-12 col-md-8">
                    <p className="h5 mx-md-2 mt-md-4 text-white-50">Il tuo nickname</p>
                    <input
                      className="form-control form-control-lg mx-md-2 my-2 my-md-0 bg-secondary"
                      type="text"
                    />
                    <p className="h5 mx-md-2 mt-md-4 text-white-50">
                      Language:
                    </p>
                    <div className="dropdown mx-md-2">
                      <button
                        className="btn btn-dark dropdown-toggle border border-white rounded-0"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        English
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#fake">
                            Italian
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#fake">
                            French
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#fake">
                            German
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#fake">
                            Japanese
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <p className="h5 mt-md-4 text-white-50">
                      Maturity Settings:
                    </p>
                    <div className="btn btn-secondary rounded text-white-50">
                      <p className="fw-bold m-0">ALL MATURITY SETTINGS</p>
                    </div>
                    <p className="my-3">
                      Show titles of all maturity for this profile
                    </p>
                    <button className="btn btn-outline-secondary rounded-0 text-white-50 button-edit">
                      EDIT
                    </button>
                    <hr />
                    <p className="h5 mt-md-4 text-white-50">
                      Autoplay controls
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Autoplay next episode in a series on all devices
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Autoplay previews while browsing on all devices
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row bg-dark offset-md-1">
                  <div className="col-12 col-lg-3 p-0 mb-2">
                    <button onClick={this.props.closeModal} className="btn btn-block btn-light rounded-0 text-black px-4 py-2 button-save closing-buttons">
                      SAVE
                    </button>
                  </div>
                  <div className="col-12 col-lg-3 p-0 mb-2">
                    <button onClick={this.props.closeModal} className="btn btn-block btn-outline-secondary rounded-0 text-white-50 px-4 py-2 closing-buttons">
                      CANCEL
                    </button>
                  </div>
                  <div className="col-12 col-lg-6 p-0 mb-2">
                    <button onClick={this.props.closeModal} className="btn btn-block btn-outline-secondary rounded-0 text-white-50 px-5 py-2 closing-buttons">
                      DELETE PROFILE
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ProfileModal;
