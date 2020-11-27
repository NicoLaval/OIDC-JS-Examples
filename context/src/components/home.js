import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <ul>
      <li>
        <Link to="/public">Public</Link>
      </li>
      <li>
        <Link to="/private">Private</Link>
      </li>
    </ul>
  </>
);

export default Home;
