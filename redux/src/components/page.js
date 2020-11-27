import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthenticatedFetch } from "utils/fetch";

const Page = () => {
  const authFetch = useAuthenticatedFetch();
  useEffect(() => {
    authFetch("url");
  }, [authFetch]);
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export default Page;
