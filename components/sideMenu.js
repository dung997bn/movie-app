import React, { Fragment, useState } from "react";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions";
import { useRouter } from "next/router";

const SideMenu = (props) => {
  const { categories } = props;
  let modal = null;
  const router = useRouter();

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies));
      modal.closeModal();
      router.push("/");
    });
  };

  return (
    <Fragment>
      <Modal ref={(ele) => (modal = ele)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories &&
          categories.map((c) => (
            <a key={c.id} href="#" className="list-group-item">
              {c.name}
            </a>
          ))}
      </div>
    </Fragment>
  );
};

export default SideMenu;
