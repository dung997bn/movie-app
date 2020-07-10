import React, { Fragment } from "react";

const SideMenu = (props) => {
  const { categories } = props;
  return (
    <Fragment>
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
