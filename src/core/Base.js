//All designing stuff will be here- Base architecture will be here
// Here all the other components will be loaded
import React from "react";
import Menu from "./Menu";

// let borderStyle = {
//   border: "10px solid violet",
// };
const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid min-vh-100 d-flex flex-column">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>

        {/* whatever we pass as children to the base it will be rendered here */}
        <div className={className}>{children}</div>
      </div>

      {/* we can keep footer as separate element */}
      <footer className="footer bg-dark mt-auto py-3 text-center">
        <div className="container-fluid bg-success text-white text-enter py-3">
          <h4>If you got any questions, feel free to reach out!</h4>
          <button className="btn btn-warning btn-lg">Contact Us</button>
        </div>
        <div className="container">
          <span className="text-muted">
            An Amazing <span className="text-white">MERN</span> Bootcamp
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Base;
