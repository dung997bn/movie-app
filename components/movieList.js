import React, { Component, Fragment } from "react";

class MovieList extends Component {
  shorten = (text, maxLength) => {
    if (text && text.length > maxLength)
      return text.substr(0, maxLength) + "...";
    return text;
  };
  render() {
    const { movies } = this.props;
    return (
      <Fragment>
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#">
                  <img className="card-img-top" src={movie.image} alt="" />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{movie.name}</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">
                    {this.shorten(movie.description, 200)}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    {/* &#9733; &#9733; &#9733; &#9733; &#9734; */}
                    {movie.rating}
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default MovieList;
