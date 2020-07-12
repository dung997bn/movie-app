import React, { Component } from "react";
import MovieCreateForm from "../../../components/movieCreateForm";
import { getMovieById } from "../../../actions";

class EditMovie extends Component {
  static getInitialProps({ query }) {
    return { query };
  }
  state = {
    movie: {
      id: "",
      name: "",
      description: "",
      rating: "",
      image: "",
      cover: "",
      longDesc: "",
    },
  };

  componentDidMount() {
    const { id } = this.props.query;
    getMovieById(id).then((movie) => {
      this.setState({ movie: movie });
    });
  }

  render() {
    const { movie } = this.state;
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm initialData={movie} />
      </div>
    );
  }
}

export default EditMovie;
