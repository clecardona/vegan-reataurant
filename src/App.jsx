import "./styles/base.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/1-Home Page/HomePage";
import CategoryPage from "./pages/2-Category Page/CategoryPage";
import ProductPage from "./pages/3-Product Page/ProductPage";
import ContactPage from "./pages/4-Contact Page/ContactPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/menu/:category" component={CategoryPage} />
          <Route
            exact
            path="/menu/:category/:productID"
            component={ProductPage}
          />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}
