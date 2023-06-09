import { Component } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class MovieRow extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  getMovies = async () => {
    try {
      let response = await fetch(
        "https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=3c39360a&s=" + this.props.query
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      } else {
        console.log("errore nella chiamata");
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div className="container mb-5">
        <h3 className="text-light mb-2">{this.props.title}</h3>
        <Row className="d-flex flex-row flex-nowrap scrollX">
          {this.state.movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.imdbID} />;
          })}
        </Row>
        {this.state.isError && (
          <Alert variant="danger">Qualcosa è andato storto :(</Alert>
        )}
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="border" role="status" variant="success">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    );
  }
}
export default MovieRow;
