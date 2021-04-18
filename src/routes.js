import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Estimations from "./views/Estimations";
import AddNewEstimation from "./views/AddNewEstimation";
import Earthworks from "./views/Estimations/Earthworks";
import Formworks from "./views/Estimations/Formworks";
import Concrete from "./views/Estimations/Concrete";
import Masonry from "./views/Estimations/Masonry";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/estimations" />
  },
  {
    path: "/estimations",
    layout: DefaultLayout,
    component: Estimations
  },
  {
    path: "/estimations-add",
    layout: DefaultLayout,
    component: AddNewEstimation
  },
  {
    path: "/estimations-earthworks",
    layout: DefaultLayout,
    component: Earthworks
  },
  {
    path: "/estimations-formworks",
    layout: DefaultLayout,
    component: Formworks
  },
  {
    path: "/estimations-concrete",
    layout: DefaultLayout,
    component: Concrete
  },
  {
    path: "/estimations-masonry",
    layout: DefaultLayout,
    component: Masonry
  },
  {
    path: "/estimations-steelworks",
    layout: DefaultLayout,
    component: Earthworks
  }
];