import { Component } from "react";

class FirstSection extends Component {
  render() {
    return (
        <div className="container">
      <div className="row py-4 d.flex justify-content-md-between bg-dark">
        <div className="col col-md-8 d-flex p-2 p-lg-0 justify-content-between justify-content-md-start align-items-center">
          <p className="h2 me-5">TV Shows</p>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle border border-white rounded-0"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#fake">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#fake">
                  Comedy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#fake">
                  Korean Drama
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#fake">
                  Rom-com
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#fake">
                  Documentaries
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-md-4 d-flex p-0 justify-content-md-end align-items-center d-none d-md-inline-flex">
          <p className="border border-white px-2 m-0">
            <i className="bi bi-text-left right-icons" />
          </p>
          <p className="border border-white px-2 m-0">
            <i className="bi bi-grid right-icons" />
          </p>
        </div>
      </div>
        </div>
    );
  }
}

export default FirstSection