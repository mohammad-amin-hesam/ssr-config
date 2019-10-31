import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import reducers from "../client/reducers";


// miz server base url for fetchnig...


export const axiosBaseUrl = axios.create({
  baseURL: "https://server1.onmiz.org"
});


// jsonplaceholder server base url for fetchnig...


export const axiosBaseUrl = axios.create({
  baseURL: "https://jsonplaceholder.typico.com/posts"
});

export default req => {
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" }
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
