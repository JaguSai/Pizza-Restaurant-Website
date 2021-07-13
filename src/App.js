import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Components/Hero';
import { GlobalStyle } from './GlobalStyles';
import Products from './Components/Products';
import { productData, productDataTwo } from './Components/Products/data'
import Feature from './Components/Feature';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Pick your favorite' data={productData}/>
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;