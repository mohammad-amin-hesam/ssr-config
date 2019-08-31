import React from "react";

const PageNotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <div>404 not found</div>;
};

export default {
  component: PageNotFound
};
