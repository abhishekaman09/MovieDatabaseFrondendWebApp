import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = movie => {
    let newMovies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: newMovies });
  };
  render() {
    if (this.state.movies.length === 0) {
      return (
        <h5>
          <b>There are no movies in current database</b>
        </h5>
      );
    }
    return (
      <React.Fragment>
        <h5>
          <b>
            There are {this.state.movies.length} movies in currennt database{" "}
          </b>
        </h5>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Tittle</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
