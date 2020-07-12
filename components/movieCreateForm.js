import React, { useState, useEffect } from "react";

const MovieCreateForm = (props) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    rating: "",
    image: "",
    cover: "",
    longDesc: "",
  });
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);

  useEffect(() => {
    if (props.initialData) {
      setForm(props.initialData);
      setIsInitialDataLoaded(true);
    }
  }, [props.initialData]);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    setForm({
      ...form,
      [name]: target.value,
    });
  };

  const handleGenreChange = (e) => {
    const { options } = e.target;
    let value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setForm({
      ...form,
      genre: value.toString(),
    });
  };

  const submitForm = () => {
    props.handleFormSubmit({ ...form });
  };
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={form.name}
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          onChange={handleChange}
          value={form.description}
          className="form-control"
          id="description"
          name="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          type="number"
          onChange={handleChange}
          value={form.rating}
          max="5"
          min="0"
          className="form-control"
          id="rating"
          name="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          type="text"
          value={form.image}
          className="form-control"
          id="image"
          name="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          type="text"
          onChange={handleChange}
          value={form.cover}
          className="form-control"
          id="cover"
          name="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          onChange={handleChange}
          className="form-control"
          value={form.longDesc}
          id="longDesc"
          name="longDesc"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          multiple
          className="form-control"
          id="genre"
          onChange={handleGenreChange}
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => submitForm()}
      >
        Create
      </button>
    </form>
  );
};

export default MovieCreateForm;
