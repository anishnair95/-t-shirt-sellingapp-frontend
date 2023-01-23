import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
export default function Home() {
  return (
    // Base is the parent component and all children will be injected inside it
    <Base title="Home Page" description="Welcome to the T-Shirt Store">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
      </div>
      <h1 className="text-white">Hello Front end</h1>
    </Base>
  );
}
