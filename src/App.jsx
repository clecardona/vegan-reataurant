import "./styles/base.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/1-Home Page/HomePage";
import CategoryPage from "./pages/2-Category Page/CategoryPage";
import ProductPage from "./pages/3-Product Page/ProductPage";
import ContactPage from "./pages/4-Contact Page/ContactPage";

/**
 * Im writting this here, because i cannot put comments inside a folder.
 * The pages/ folder is excelent.
 * I understand wanting to put 1-, 2-, 3-, etc to each page to view them in
 * their correct order.
 *
 * But please watch out for the empty spaces and upercases, this can lead to bugs
 * So do:
 * 1-home-page
 *
 * Instead of:
 * 1-Home page
 *
 * -1 because this may lead to bugs on older Operating Systems
 */
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* Why menu/category has an exact tag? I think is better to have a default case with an 404 error page if you dont find a match */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/menu/:category" component={CategoryPage} />
          <Route path="/menu/:category/:productID" component={ProductPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
