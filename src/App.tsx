import './styles/base.scss';

import Page404 from 'components/404';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ContactPage from 'components/ContactPage/ContactPage';
import HomePage from 'components/HomePage/HomePage';
import ProductPage from 'components/ProductPage/ProductPage';
import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu/:category/:productID' element={<ProductPage />} />
          <Route path='/menu/:category' element={<CategoryPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/' element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
