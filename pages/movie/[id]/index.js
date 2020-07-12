import React from "react";
import { useRouter } from "next/router";
import { getMovieById, deleteMovie } from "../../../actions";

const Movie = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;

  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <button className="btn btn-primary  btn-lg mr-1" role="button">
          Learn more
        </button>
        <button
          onClick={() => handleDeleteMovie(movie.id)}
          className="btn btn-danger btn-lg mr-1"
          role="button"
        >
          Delete
        </button>
        <button
          onClick={() => router.push(`/movie/${movie.id}/edit`)}
          className="btn btn-warning  btn-lg "
          role="button"
        >
          Edit
        </button>
      </div>

      <p style={{ fontSize: "21px" }}>{movie.longDesc}</p>
    </div>
  );
};

Movie.getInitialProps = async (context) => {
  const { id } = context.query;
  const movie = await getMovieById(id);
  console.log(context);

  return { movie };
};

export default Movie;
