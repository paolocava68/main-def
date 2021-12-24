import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  Sidebar,
} from "./components";
import Fitness from "./components/Fitness";
import Piani from "./components/Piani";
import Questionnaire from "./components/questionnaire";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fitness" element={<Fitness />} />
      <Route path="/piani" element={<Piani />} />
      <Route path="/questionnaire" element={<Questionnaire />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
