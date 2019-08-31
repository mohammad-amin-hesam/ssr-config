import React, { Suspense } from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";

const App = ({ route }) => {
  return (
    <>
      {/* <Suspense fallback={() => <div>Hello</div>}> */}
        <Header />
        {renderRoutes(route.routes)}
      {/* </Suspense> */}
    </>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
